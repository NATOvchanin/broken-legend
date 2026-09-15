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
                const response = await fetch('progress.txt');
                const raw = await response.text();
                const firstLine = raw.split('\n')[0].trim();
                if (firstLine === '#OFF') {
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
                const url = 'progress.txt';
                const response = await fetch(url);
                const text = await response.text();
                const lines = text.split('\n').filter(line => line.trim() !== '');

                // Ищем число в любой строке (первая подходящая)
                let percent = null;
                for (const line of lines) {
                    const match = line.trim().match(/^\d+$/);
                    if (match) {
                        percent = parseInt(match[0]);
                        break; // нашли — выходим из цикла
                    }
                }

                if (percent !== null && percent >= 0 && percent <= 999) {
                    const dict = currentLang === 'en' ? langEn : langRu;
                    document.getElementById('progressDisplay').textContent = dict.progressLabel + ': ' + percent + '%';
                }

                const logContainer = document.getElementById('progress-log');
                logContainer.innerHTML = '';
                let hue = 0;

                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (line.startsWith('*')) {
                        const text = line.substring(1).trim();
                        const el = document.createElement('div');
                        el.className = 'log-item';
                        el.textContent = '- ' + text;
                        setInterval(() => {
                            hue = (hue + 1.2) % 360;
                            el.style.color = 'hsl(' + hue + ', 100%, 60%)';
                        }, 50);
                        logContainer.appendChild(el);
                    }
                }
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

        document.addEventListener('DOMContentLoaded', function () {
            // Принудительно устанавливаем русский язык перед загрузкой
            currentLang = 'ru';

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
    
