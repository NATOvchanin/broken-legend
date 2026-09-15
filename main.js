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
            try {
                const response = await fetch('progress.json');
                const data = await response.json();

                if (typeof data.percent === 'number' && data.percent >= 0 && data.percent <= 100) {
                    const dict = currentLang === 'en' ? langEn : langRu;
                    document.getElementById('progressDisplay').textContent = dict.progressLabel + ': ' + data.percent + '%';
                }

                const logContainer = document.getElementById('progress-log');
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
            progressHue = (progressHue + 1.2) % 360;

            const p = document.getElementById("progressDisplay");

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
            // Принудительно устанавливаем русский язык перед загрузкой
            currentLang = 'ru';

            // Легенда строится синхронно из локальных данных (content-data.js).
            // Материалы — асинхронно, из media.json (см. render.js) — поэтому
            // ждём их перед первым применением перевода, иначе setLanguage()
            // не найдёт ещё не созданные .media-item.
            renderLegend();
            await renderMedia();
            setLanguage(currentLang);

            const images = document.querySelectorAll('.clickable-img');
            images.forEach(img => {
                img.addEventListener('click', function (e) {
                    e.stopPropagation();
                    openPopup(this.src);
                });
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closePopup();
                }
            });

            loadProgress();
        });
    
