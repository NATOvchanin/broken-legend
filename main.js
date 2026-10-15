// ==========================================================
//  ФОРМА ОБРАТНОЙ СВЯЗИ
// ==========================================================
async function sendFeedback() {
    const text = document.getElementById('feedbackText').value;
    const status = document.getElementById('feedbackStatus');

    if (!text.trim()) {
        status.textContent = currentLang === 'ru' ? 'Напиши сначала текст!' : 'Please write a message first!';
        status.style.color = '#ff0033';
        return;
    }

    let isAcceptingMessages = true;
    try {
        const response = await fetch('progress.json');
        const data = await response.json();
        if (data.status === 'OFF') {
            isAcceptingMessages = false;
        }
    } catch (e) {
        console.log('Не удалось проверить статус приёма.');
    }

    if (!isAcceptingMessages) {
        status.textContent = currentLang === 'ru'
            ? 'Приём сообщений временно отключён. Попробуйте позже.'
            : 'Messages are temporarily disabled. Please try again later.';
        status.style.color = '#ff0033';
        return;
    }

    status.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
    status.style.color = '#33ff33';

    // Адрес Cloudflare Worker — токен бота живёт только в секретах Worker'а.
    const WORKER_URL = 'https://talebreak.arkmapper2018.workers.dev';

    try {
        const res = await fetch(WORKER_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        const data = await res.json();
        console.log(data);

        if (!data.ok) {
            throw new Error(data.error || 'Неизвестная ошибка');
        }

        status.textContent = currentLang === 'ru' ? 'Сообщение отправлено! Спасибо!' : 'Message sent! Thank you!';
        status.style.color = '#33ff33';
        document.getElementById('feedbackText').value = '';
    } catch (e) {
        console.error('Ошибка:', e);
        status.textContent =
            (currentLang === 'ru' ? 'Ошибка отправки: ' : 'Send error: ')
            + (e.message || e);
        status.style.color = '#ff0033';
    }
}


// ==========================================================
//  ТАЙМЕР ДО РЕЛИЗА 1 ЭПИЗОДА
// ==========================================================
//  Управляется из progress.json:
//    "timer": "ON" | "OFF"   — показать / скрыть
//    "timerTarget": "YYYY-MM-DDTHH:MM:SS+03:00"  — момент релиза
//  Текст: "До релиза 1 эпизода: X дн X ч X мин X сек"

let timerIntervalId = null;
let timerTargetMs = null;
let timerEnabled = false;

function formatCountdown(diffMs) {
    const dict = currentLang === 'en' ? langEn : langRu;
    if (diffMs <= 0) {
        return dict.timerEnded;
    }
    const totalSec = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return dict.timerPrefix +
        days + ' ' + dict.timerDays + ' ' +
        hours + ' ' + dict.timerHours + ' ' +
        mins + ' ' + dict.timerMins + ' ' +
        secs + ' ' + dict.timerSecs;
}

function refreshTimerText() {
    const el = document.getElementById('timerDisplay');
    if (!el || !timerEnabled || timerTargetMs === null) return;
    const diff = timerTargetMs - Date.now();
    el.textContent = formatCountdown(diff);
}

function stopReleaseTimer() {
    if (timerIntervalId !== null) {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
    }
    timerEnabled = false;
    timerTargetMs = null;
    const wrap = document.getElementById('release-timer');
    if (wrap) wrap.hidden = true;
}

function startReleaseTimer(targetIso) {
    const wrap = document.getElementById('release-timer');
    const el = document.getElementById('timerDisplay');
    if (!wrap || !el) return;

    const target = new Date(targetIso);
    if (isNaN(target.getTime())) {
        console.warn('Некорректный timerTarget:', targetIso);
        stopReleaseTimer();
        return;
    }

    timerTargetMs = target.getTime();
    timerEnabled = true;
    wrap.hidden = false;
    refreshTimerText();

    if (timerIntervalId !== null) clearInterval(timerIntervalId);
    timerIntervalId = setInterval(refreshTimerText, 1000);
}

async function loadReleaseTimer() {
    // Таймер есть только на главной — на остальных страницах контейнера нет.
    const wrap = document.getElementById('release-timer');
    if (!wrap) return;

    try {
        const response = await fetch('progress.json');
        const data = await response.json();

        if (data.timer === 'ON' && data.timerTarget) {
            startReleaseTimer(data.timerTarget);
        } else {
            stopReleaseTimer();
        }
    } catch (e) {
        console.log('Не удалось загрузить таймер:', e);
        stopReleaseTimer();
    }
}


// ==========================================================
//  ПРОГРЕСС + ПЕРЕЛИВАНИЕ ЦВЕТА
// ==========================================================
//  Один общий интервал крутит и заголовок процента, и список
//  изменений — скорость одинаковая.
//
//  Настройка скорости:
//    COLOR_STEP  — насколько градусов сдвигается hue за тик
//    COLOR_MS    — интервал обновления в миллисекундах
//  Чем меньше STEP и/или больше MS — тем медленнее переливание.

const COLOR_STEP = 1.2;
const COLOR_MS = 50;

let progressHue = 0;
let logEls = [];          // элементы пунктов списка изменений
let colorIntervalId = null;

function applyProgressColors() {
    progressHue = (progressHue + COLOR_STEP) % 360;
    const color = 'hsl(' + progressHue + ', 100%, 60%)';
    const glow = '0 0 20px ' + color;

    const p = document.getElementById('progressDisplay');
    if (p) {
        p.style.color = color;
        p.style.textShadow = glow;
    }

    for (let i = 0; i < logEls.length; i++) {
        logEls[i].style.color = color;
    }
}

function startColorCycle() {
    if (colorIntervalId !== null) return; // уже запущен
    colorIntervalId = setInterval(applyProgressColors, COLOR_MS);
}

async function loadProgress() {
    const displayEl = document.getElementById('progressDisplay');
    const logContainer = document.getElementById('progress-log');
    // Прогресс есть только на главной — на остальных страницах выходим.
    if (!displayEl || !logContainer) return;

    try {
        const response = await fetch('progress.json');
        const data = await response.json();

        if (typeof data.percent === 'number' && data.percent >= 0 && data.percent <= 100) {
            const dict = currentLang === 'en' ? langEn : langRu;
            displayEl.textContent = dict.progressLabel + ': ' + data.percent + '%';
        }

        logContainer.innerHTML = '';
        logEls = [];

        // Пунктов может быть от 0 до 10.
        const items = Array.isArray(data.items) ? data.items.slice(0, 10) : [];

        items.forEach(function (text) {
            const el = document.createElement('div');
            el.className = 'log-item';
            el.textContent = '- ' + text;
            logContainer.appendChild(el);
            logEls.push(el);
        });

        startColorCycle();
    } catch (e) {
        console.log('Не удалось загрузить прогресс:', e);
    }
}


// ==========================================================
//  ПОПАП КАРТИНОК
// ==========================================================
function openPopup(src) {
    const popup = document.getElementById('image-popup');
    const img = document.getElementById('popup-image');
    img.src = src;
    popup.classList.add('active');
}

function closePopup() {
    document.getElementById('image-popup').classList.remove('active');
}


// ==========================================================
//  ИНИЦИАЛИЗАЦИЯ
// ==========================================================
document.addEventListener('DOMContentLoaded', async function () {
    // currentLang уже установлен в i18n.js — из localStorage или 'ru'.

    // Легенда — синхронно из content-data.js.
    // Сцены, тизеры, декорации — асинхронно из JSON (render.js).
    // Ждём их перед setLanguage(), иначе перевод не найдёт блоки.
    renderLegend();
    await renderMedia();
    await renderTeasers();
    await renderCharacters();
    setLanguage(currentLang);

    // Делегирование клика по картинкам (работает и для динамических блоков).
    document.addEventListener('click', function (e) {
        const img = e.target.closest('.clickable-img');
        if (!img) return;
        e.stopPropagation();
        openPopup(img.src);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    loadProgress();
    loadReleaseTimer();
});
