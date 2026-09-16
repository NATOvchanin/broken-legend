// ==========================================================
//  ФОРМА ОБРАТНОЙ СВЯЗИ И ПРОГРЕСС
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
                status.textContent = currentLang === 'ru' ? 'Приём сообщений временно отключён. Попробуйте позже.' : 'Messages are temporarily disabled. Please try again later.';
                status.style.color = '#ff0033';
                return;
            }

            status.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
            status.style.color = '#33ff33';

            // Адрес твоего Cloudflare Worker (см. worker.js) — токен бота
            // здесь не хранится, он живёт только в секретах Worker'а.
            const WORKER_URL = 'https://talebreak.arkmapper2018.workers.dev';

            try {
                const res = await fetch(WORKER_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
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
                console.error("Ошибка:", e);

                status.textContent =
                    (currentLang === 'ru'
                        ? 'Ошибка отправки: '
                        : 'Send error: ')
                    + (e.message || e);

                status.style.color = '#ff0033';
            }
        }

        async function loadProgress() {
            const displayEl = document.getElementById('progressDisplay');
            const logContainer = document.getElementById('progress-log');
            // Прогресс-бар есть только на главной странице —
            // на остальных страницах просто ничего не делаем.
            if (!displayEl || !logContainer) return;

            try {
                const response = await fetch('progress.json');
                const data = await response.json();

                if (typeof data.percent === 'number' && data.percent >= 0 && data.percent <= 100) {
                    const dict = currentLang === 'en' ? langEn : langRu;
                    displayEl.textContent = dict.progressLabel + ': ' + data.percent + '%';
                }

                logContainer.innerHTML = '';
                let hue = 0;

                // Пунктов может быть от 0 до 10 — сколько заполнено,
                // столько и показывается. slice(0, 10) — защита на
                // случай, если в файле случайно окажется больше.
                const items = Array.isArray(data.items) ? data.items.slice(0, 10) : [];

                items.forEach(text => {
                    const el = document.createElement('div');
                    el.className = 'log-item';
                    el.textContent = '- ' + text;
                    setInterval(() => {
                        hue = (hue + 1.2) % 360;
                        el.style.color = 'hsl(' + hue + ', 100%, 60%)';
                    }, 50);
                    logContainer.appendChild(el);
                });
            } catch (e) {
                console.log('Не удалось загрузить прогресс:', e);
            }
        }

        let progressHue = 0;

        setInterval(() => {
            const p = document.getElementById("progressDisplay");
            if (!p) return; // на странице без прогресс-бара — просто ничего не делаем

            progressHue = (progressHue + 1.2) % 360;
            p.style.color = `hsl(${progressHue},100%,60%)`;
            p.style.textShadow = `0 0 20px hsl(${progressHue},100%,60%)`;
        }, 50);

        

// ==========================================================
//  ПОПАП КАРТИНОК И ИНИЦИАЛИЗАЦИЯ
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

        document.addEventListener('DOMContentLoaded', async function () {
            // currentLang уже установлен в i18n.js — либо из localStorage
            // (если человек уже выбирал язык раньше), либо 'ru' по умолчанию.

            // Легенда строится синхронно из локальных данных (content-data.js).
            // Сцены, тизеры и декорации — асинхронно, из JSON-файлов
            // (см. render.js) — поэтому ждём их перед первым применением
            // перевода, иначе setLanguage() не найдёт ещё не созданные блоки.
            // Каждая функция сама проверяет, есть ли её контейнер на странице,
            // так что лишние вызовы на других страницах безвредны.
            renderLegend();
            await renderMedia();
            await renderTeasers();
            await renderCharacters();
            setLanguage(currentLang);

            // Делегирование вместо навешивания обработчика на каждую
            // картинку: работает и для блоков, которые появятся позже
            // (например, если список сцен подгрузится с задержкой).
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
        });
    
