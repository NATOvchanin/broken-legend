// ==========================================================
//  ЯЗЫК ПО УМОЛЧАНИЮ
// ==========================================================
        let currentLang = 'ru';

        

// ==========================================================
//  СЛОВАРЬ ПЕРЕВОДОВ
// ==========================================================
        const langRu = {
            homeTitle: "Трейлер",
            trailerUrl: "https://www.youtube.com/embed/lGth_xZWymo",
            legendTitle: "Легенда о небесах",
            mediaTitle: "Скриншоты и концепты",
            actorsTitle: "Главные герои",
            contactTitle: "Связь с разработчиком",
            contactDesc: "Форма для отправки сообщений разработчику. Мнение, вопросы, контакты, что угодно - я всё читаю!",
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
            navMedia: "Материалы",
            navActors: "Актёры",
            navContact: "Связь",
            navSubscribe: "Подписаться",
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
            // Медиа
            mediaDesc1: "Talebreak (Сломанная сказка) — визуальная новелла с элементами интерактивных игр, повествующая о детском кукольном спектакле, где поставлена великая история героев, побеждающих зло... Но что, если жители знают, какую роль им суждено сыграть? И каково жить, понимая что с приближающимся финалом ты просто... Исчезнешь?",
            mediaDesc2: "Игра даёт условно нелинейное (с кучей выборов и сцен, но с линейным общим сюжетом) прохождение, завязанное на карточных боях и мелких мини-играх, не обязательных для внимательных игроков, скопивших достаточно игровой валюты. Кроме того в игре заготовлен набор случайных встреч и секретных событий, увеличивающих реиграбельность.",
            mediaDesc3: "Планируется к выпуску 6 эпизодов, развивающих общий сюжет и рассказывающих свои локальные истории. Каждый будет выпущен отдельно. В данный момент идёт работа над первым. Игра будет полностью бесплатной, единственная валюта, которая от вас нужна - ваше внимание.",
            mediaDesc4: "Talebreak содержит в себе РПГ-составляющую, выраженную в ограниченном количестве жизней на эпизод, показателях команды, системе торговли, репутации. Некоторые выборы, сделанные в процессе прохождения, игра запоминает вплоть до финала.",
            mediaDesc5: "Вы не играете за героев, вы - интерактивный зритель, наблюдающий за их приключением и принимающий все решения. Вы вольны пройти этот длинный путь так, как вам нравится. Но когда вы встретитесь с финальным судьёй... Вас заставят ответить за каждое свершённое действие.",
            mediaDesc6: "Станет ли команда теми героями, о которых написано в пророчестве: добрые, честные, благородные борцы со злом. Или же они решат пойти против судьбы, что создала этот мир, в погоне за силой, богатством и развлечением?..",
            // Картинки для медиа
            mediaImg1: "assets/img/photo1.webp",
            mediaImg2: "assets/img/photo2.webp",
            mediaImg3: "assets/img/photo3.webp",
            mediaImg4: "assets/img/photo4.webp",
            mediaImg5: "assets/img/photo5.webp",
            mediaImg6: "assets/img/photo6.webp"
        };

        const langEn = {
            homeTitle: "Trailer",
            trailerUrl: "https://www.youtube.com/embed/vkzxH5LFVYg",
            legendTitle: "The Legend of the Heavens",
            mediaTitle: "Screenshots & Concept Art",
            actorsTitle: "Main Characters",
            contactTitle: "Contact the Developer",
            contactDesc: "A form to send messages to the developer. Feedback, questions, contacts, anything — I read it all!",
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
            navMedia: "Media",
            navActors: "Cast",
            navContact: "Contact",
            navSubscribe: "Subscribe",
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
            // Media (English translations)
            mediaDesc1: "Talebreak — a visual novel with interactive elements, telling the story of a children's puppet theater where a great tale of heroes defeating evil is staged... But what if the inhabitants know the role they are destined to play? And what is it like to live knowing that with the approaching finale, you simply... vanish?",
            mediaDesc2: "The game offers a conditionally non-linear (with plenty of choices and scenes, but a linear overall story) experience, tied to card battles and small mini-games, not mandatory for attentive players who have saved enough in-game currency. The game also features a set of random encounters and secret events, increasing replayability.",
            mediaDesc3: "Planned for release in 6 episodes, each developing the overall plot and telling their own local stories. Each will be released separately. Work on the first episode is currently in progress. The game will be completely free; the only currency required from you is your attention.",
            mediaDesc4: "Talebreak contains an RPG component, expressed in a limited number of lives per episode, team stats, a trading system, and reputation. Some choices made during the playthrough are remembered by the game all the way to the finale.",
            mediaDesc5: "You do not play as the heroes; you are an interactive spectator watching their adventure and making all the decisions. You are free to walk this long path as you like. But when you meet the final judge... You will be forced to answer for every action you have taken.",
            mediaDesc6: "Will the team become the heroes written in the prophecy: good, honest, noble fighters against evil? Or will they decide to go against the fate that created this world, in pursuit of power, wealth, and entertainment?..",
            // Media images (English versions)
            mediaImg1: "assets/img/en/photo1.webp",
            mediaImg2: "assets/img/en/photo2.webp",
            mediaImg3: "assets/img/en/photo3.webp",
            mediaImg4: "assets/img/en/photo4.webp",
            mediaImg5: "assets/img/en/photo5.webp",
            mediaImg6: "assets/img/en/photo6.webp"
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

            // Особый случай: прогресс-бар. Не подходит под общий цикл,
            // потому что текст в нём состоит из двух частей —
            // переводимой подписи и динамического процента,
            // который приходит из progress.txt отдельно.
            const percentMatch = document.getElementById('progressDisplay').textContent.match(/\d+(?=%)/);
            if (percentMatch) {
                document.getElementById('progressDisplay').textContent = dict.progressLabel + ': ' + percentMatch[0] + '%';
            }
        }

        
