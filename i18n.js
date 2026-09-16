// ==========================================================
//  ЯЗЫК ПО УМОЛЧАНИЮ
// ==========================================================
        // Раньше язык хранился только в переменной и сбрасывался
        // при каждой загрузке — не страшно было, пока весь сайт
        // жил на одной странице. Теперь страниц несколько, и без
        // localStorage язык обнулялся бы при каждом переходе
        // по меню на многостраничном сайте.
        let currentLang = localStorage.getItem('talebreak_lang') || 'ru';

        

// ==========================================================
//  СЛОВАРЬ ПЕРЕВОДОВ
// ==========================================================
        const langRu = {
            homeTitle: "Трейлер",
            trailerUrl: "https://www.youtube.com/embed/lGth_xZWymo",
            legendTitle: "Легенда о небесах",
            mediaTitle: "Сцены",
            actorsTitle: "Декорации",
            contactTitle: "Связь с разработчиком",
            contactDesc: "Форма для отправки сообщений разработчику. Мнение, вопросы, контакты, что угодно - я всё читаю! Также пишите ваши контакты, если желаете в будущем... Стать ближе к этой истории.",
            sendBtn: "Отправить",
            subTitle: "Следите за разработкой",
            actor1Title: "Рыцарь",
            actor1Desc: "Воин в сверкающих доспехах, чье лицо скрыто. Жадный и циничный, но способный на благородство.",
            actor2Title: "Лекарь",
            actor2Desc: "Девушка в зелёной мантии, с каштановыми волосами и добрым сердцем. Пугливая, но верная спутница.",
            actor3Desc: "И возможно, кто-то ещё?..",
            // Навигация
            navHome: "Главная",
            navLegend: "Легенда",
            navMedia: "Сцены",
            navActors: "Декорации",
            navContact: "Телефон",
            navSubscribe: "Гардероб",

            // Главная — описание игры и тизеры
            aboutText: "Talebreak (Сломанная сказка) — визуальная новелла о детском кукольном спектакле, где разыгрывается история героев, побеждающих зло. Но что, если жители знают, какую роль им суждено сыграть — и каково жить, зная, что с финалом ты просто исчезнешь?\n\nВы не играете за героев — вы интерактивный зритель, управляющий их путём через карточные бои, мини-игры и лёгкую RPG-систему с репутацией и памятью выборов. Игра выйдет в 6 эпизодах, сейчас в работе первый. Она будет полностью бесплатной - единственная валюта, которая нам нужна от вас - это ваше внимание.",
            teasersTitle: "Тизеры",

            // Гардероб — пояснения к площадкам
            subGamejolt: "GameJolt — для всех",
            subVkplay: "VK Play — для русскоязычных",
            subItch: "Itch.io — для англоязычных",
            subTelegram: "Telegram",

            // Декорации — категории
            catMain: "Главные герои",
            catImportant: "Важные персонажи",
            catEvents: "События",
            backToProps: "← Назад к декорациям",
            wipNotice: "Страница пока пустует. Заглядывай позже.",
            mysteryText: "И возможно, кто-то ещё?..",
            progressLabel: "ПРОГРЕСС ПЕРВОЙ ГЛАВЫ",
            feedbackPlaceholder: "Твой текст... (до 15 000 символов)",
            // Легенда
            legend1: "Когда с небес сойдут,\nГерои, чьих имён не знаем мы,\nОни на помощь к нам придут,\nИ защитят наш мир от тьмы.",
            legend2: "По свиткам, что храним веками,\nИзвестно, у них сильный дух.\nВдвоём, своими же руками\nУбьют того, чей свет потух.",
            legend3: "Очистив земли королевства,\nОт нечисти, что из болот встаёт,\nМечом закончат и те зверства,\nКоторые свободы лорд ведёт.",
            legend4: "В союз вступив с самими небесами\nОни пустыню обойдут.\nИ над песками став князцами,\nНа земли за стенами попадут.",
            legend5: "Когда последний город зла\nБудет разрушен их словами.\nРуинам уж не будет и числа,\nВедь джунгли станут чёрными дровами.",
            legend6: "Смотритель тьмы, что плёткой бьёт рабам по шеям,\nВ тяжёлой битве с силой света вступит там.\nОтправься же к своим поганым холуям!\nВедь место лишь в могиле заготовано плутам!",
            legend7: "В конце сего огромного пути,\nДостигнув шпиля, что стремится к облакам,\nОни увидят и того, кого найти\nНемыслимо, он недоступен слабакам.",
            legend8: "Лорд смерти, самый сильный враг,\nС которым бой не будет лёгким никогда.\nОн всё же угодил в конце в просак,\nИ жизнь его уж больно коротка.",
            legend9: "Он будет мёртв и дело его проиграет.\nНам всем герои счастье возвратят.\nМы ждём, этих скрижалей миг настанет,\nКогда текста легенд нас всех освободят.",
        };

        const langEn = {
            homeTitle: "Trailer",
            trailerUrl: "https://www.youtube.com/embed/vkzxH5LFVYg",
            legendTitle: "The Legend of the Heavens",
            mediaTitle: "Scenes",
            actorsTitle: "Props",
            contactTitle: "Contact the Developer",
            contactDesc: "A form to send messages to the developer. Feedback, questions, contacts, anything — I read it all! Also leave your contacts if you wish, in the future... to become closer to this story.",
            sendBtn: "Send",
            subTitle: "Follow the Development",
            actor1Title: "Knight",
            actor1Desc: "A warrior in shining armor, his face hidden. Greedy and cynical, yet capable of nobility.",
            actor2Title: "Healer",
            actor2Desc: "A girl in a green cloak with chestnut hair and a kind heart. Timid but loyal companion.",
            actor3Desc: "And perhaps someone else?..",
            // Navigation
            navHome: "Home",
            navLegend: "Legend",
            navMedia: "Scenes",
            navActors: "Props",
            navContact: "Telephone",
            navSubscribe: "Wardrobe",

            // Home — game description and teasers
            aboutText: "Talebreak is a visual novel about a children's puppet show staging the tale of heroes who defeat evil. But what if the inhabitants know the role they are destined to play — and what is it like to live knowing that with the finale you simply vanish?\n\nYou don't play as the heroes — you are an interactive spectator guiding their path through card battles, mini-games and a light RPG system with reputation and remembered choices. The game will come out in 6 episodes, the first one is in the works now. It will be completely free - the only currency we need from you is your attention.",
            teasersTitle: "Teasers",

            // Wardrobe — platform notes
            subGamejolt: "GameJolt — for everyone",
            subVkplay: "VK Play — for Russian speakers",
            subItch: "Itch.io — for English speakers",
            subTelegram: "Telegram",

            // Props — categories
            catMain: "Main heroes",
            catImportant: "Important characters",
            catEvents: "Events",
            backToProps: "← Back to props",
            wipNotice: "This page is still empty. Check back later.",
            mysteryText: "And perhaps... someone else?..",
            progressLabel: "CHAPTER 1 PROGRESS",
            feedbackPlaceholder: "Your text... (up to 15,000 characters)",
            // Legend (English translation — revised)
            legend1: "When from the heavens they descend,\nThe nameless heroes we await,\nThey'll come to aid us in the end,\nAnd shield our world from shadow's fate.",
            legend2: "In ancient scrolls preserved through years,\nWe know the strength within their soul.\nWith their own hands, they'll end the one\nWhose fading light has lost control.",
            legend3: "They'll cleanse the kingdom's tainted lands,\nFrom horrors rising from the bog,\nAnd with their swords, they'll stop the hands\nOf Freedom's Lord, who hides in fog.",
            legend4: "In league with heaven's guiding light,\nThey'll cross the desert's burning sand,\nAnd claim the dunes where secrets hide,\nTo reach the walls of distant land.",
            legend5: "When the last city of the night\nIs shattered by their spoken word,\nThe endless ruins burn so bright,\nAs blackened jungles fall unheard.",
            legend6: "The Watcher of the Dark, who whips\nHis slaves and breaks them in the fight,\nWill face the Light and lose his grip,\nAnd fall into eternal night.",
            legend7: "At the end of this long road,\nUpon the spire that scrapes the sky,\nThey'll face the one who bears the load,\nThe one no weakling dares defy.",
            legend8: "The Lord of Death, the strongest foe,\nWill bring a battle hard and long,\nBut he will fall, as legends show,\nAnd end his reign — his power gone.",
            legend9: "He'll be no more, his cause is lost,\nAnd joy returns to one and all.\nWe wait for when the prophecy is crossed,\nAnd ancient words at last set us free.",
        };

        

// ==========================================================
//  ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
// ==========================================================
        // Универсальный проход по всем переводимым элементам.
        // Чтобы добавить новый текст — не трогаем эту функцию,
        // а просто добавляем data-i18n="ключ" в HTML и сам ключ
        // в оба словаря (langRu / langEn) выше.
        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('talebreak_lang', lang);
            const dict = lang === 'en' ? langEn : langRu;

            // Обычный текст: <тег data-i18n="ключ">
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (dict[key] !== undefined) el.textContent = dict[key];
            });

            // Атрибут src (картинки, видео): <тег data-i18n-src="ключ">
            document.querySelectorAll('[data-i18n-src]').forEach(el => {
                const key = el.dataset.i18nSrc;
                if (dict[key] !== undefined) el.src = dict[key];
            });

            // Плейсхолдер: <тег data-i18n-placeholder="ключ">
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.dataset.i18nPlaceholder;
                if (dict[key] !== undefined) el.placeholder = dict[key];
            });

            // Особый случай: прогресс-бар. Есть только на главной
            // странице — на остальных страницах элемента просто нет.
            // Не подходит под общий цикл ещё и потому, что текст
            // состоит из двух частей: переводимой подписи и
            // динамического процента, который приходит из
            // progress.json отдельно.
            const progressEl = document.getElementById('progressDisplay');
            if (progressEl) {
                const percentMatch = progressEl.textContent.match(/\d+(?=%)/);
                if (percentMatch) {
                    progressEl.textContent = dict.progressLabel + ': ' + percentMatch[0] + '%';
                }
            }

            // Особые случаи: блоки, данные которых приходят из
            // JSON-файлов (см. render.js), а не из этого словаря,
            // поэтому не подходят под общий цикл выше. Каждая
            // проверка typeof — на случай, если на конкретной
            // странице этого блока нет.
            if (typeof applyMediaLanguage === 'function') {
                applyMediaLanguage(lang);
            }
            if (typeof applyTeaserLanguage === 'function') {
                applyTeaserLanguage(lang);
            }
            if (typeof applyCharacterLanguage === 'function') {
                applyCharacterLanguage(lang);
            }
        }

        
