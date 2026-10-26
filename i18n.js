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
            aboutText: "Talebreak (Сломанная сказка) — визуальная новелла о детском кукольном спектакле, где разыгрывается история героев, побеждающих зло. Но что, если жители знают, какую роль им суждено сыграть — и каково жить, зная, что с финалом ты просто исчезнешь?\n\nВы не играете за героев — вы интерактивный зритель, управляющий их путём через карточные бои, мини-игры и лёгкую RPG-систему с репутацией и памятью выборов. Игра выйдет в 6 эпизодах, первый готов, сейчас в работе второй. Она будет полностью бесплатной - единственная валюта, которая нам нужна от вас - это ваше внимание.",
            teasersTitle: "Тизеры",

            // Гардероб — пояснения к площадкам
            subGamejolt: "GameJolt — для всех",
            subVkplay: "VK Play — для русскоязычных",
            subItch: "Itch.io — для англоязычных",
            subTelegram: "Telegram — для неформалов",

            // Декорации — категории
            catMain: "Главные герои",
            catImportant: "Важные персонажи",
            catEvents: "События",
            wikiSewerLabyrinthP2: "Содержание тупиков и карта лабиринта будут добавлены позже.",
            wikiSewerLabyrinthP1: "Лабиринт канализации — набор узлов-локаций внутри городской канализации Большегорода. Содержит 11 тупиков и 23 развилки. Появляется дважды: ночью 1 и 2 дня. Для ориентирования может пригодиться карта, находящаяся в 5 пункте.",
            wikiMerchantsCourtP2: "В случае неправильного решения герои получают 1 достаток. Если выявить виновника правильно — будет получен особый предмет «Карманный Золотоискатель».",
            wikiMerchantsCourtP1: "Суд торговцев — событие в игре Talebreak. Одна из развилок на развлечение в торговом квартале в середине 2 дня. Два торговца спорят за принадлежность пункта продажи и просят Валиаса разобраться. Изначальный виновник определяется случайно; для его определения нужно смотреть на датировку документов, источник ловли рыбы, местоположение градоначальника и оформление бумаг заместителями.",
            wikiSoldatomaniaP3: "В ходе прогулки у стены герои могут залезть в дыру, о которой в 1 день рассказывал Бальбаш. Там их ждут Амулет и битва с Нечто. Найдя кусок руны в бараках, Валиас может разобраться в конфликте стражников между собой, но это не обязательно и не приведёт к награде.",
            wikiSoldatomaniaP2: "Пойдя в дом офицеров за осколком руны, есть 3 пути: если репутация команды у добряков 6 и выше — осколок будет получен бесплатно; если нет — за любую карту или 1 достаток.",
            wikiSoldatomaniaP1: "Солдатомания — набор событий в игре Talebreak. Обязательное сюжетное событие, связанное с поиском антимагической руны командой во 2 день для открытия барьера в канализации. Содержит посещение дома офицеров, прогулку у крепостной стены и бараки.",
            wikiCheatTheCheaterP1: "Обмануть обманщика — событие в игре Talebreak. Одна из случайных встреч утром 2 дня в Ночевальне. Валиас видит кошколюда-напёрсточника, с которым может сыграть. Игрок должен наугад найти среди 3 стаканов шарик. В награду он получает карту «Фарт».",
            wikiBattleVsWorldItem4: "Победа в финале — 2 достатка",
            wikiBattleVsWorldItem3: "Поражение в финале — 1 достаток",
            wikiBattleVsWorldItem2: "Поражение в полуфинале — ничего",
            wikiBattleVsWorldItem1: "Поражение в четвертьфинале — ничего",
            wikiBattleVsWorldListTitle: "Награды:",
            wikiBattleVsWorldP1: "Битва против мира — событие в игре Talebreak. Одна из случайных встреч утром 2 дня в Ночевальне. Валиас видит чемпионат по армрестлингу, в котором можно участвовать. Турнир проходит в 3 мини-игры на быстрое нажатие одной и той же кнопки; доступна авто-победа за достаток.",
            wikiMohovichIntro: "Мохович — Бор Мохович, второстепенный персонаж из игры Talebreak. Самый высокий полурослик в Большегороде, друид, разводящий свой личный зоопарк в одном из шатров торгового района. Его можно встретить в середине 2 дня, если пойти прогуляться по рынку.",
            wikiSkeletonsP1: "Как противники не представляют опасности в обоих боях: их колоды легко побеждаются стартовой, а во время спарринга она и вовсе урезана, как и их характеристики.",
            wikiSkeletonsIntro: "Скелеты-подручные — второстепенные персонажи из игры Talebreak. Единственные агенты зла в городе, призванные Пифием для помощи ему. Украли мантии из Башни Магов. Абсолютно некомпетентные и неопасные. Встречаются ночью 1 дня в канализации перед комнатой мага — первый обязательный для сюжета бой. Второй раз могут встретиться в середине 2 дня в торговом квартале, если пойти проверить переулок (только если ни один выбор в развилке ещё не был сделан; сцена не занимает всё время).",
            wikiArenaMasterP1: "В зависимости от выбранного уровня сложности в награду будут получены разные боевые карты. Денежного приза нет. Тактики различаются: Стражника легко победить стартовой колодой, с Атлетом придётся попотеть, Эльф-воин требует концентрации и удачи, а битва с Крестьянином по большей части завязана на случайности.",
            wikiArenaMasterIntro: "Хозяин арены — второстепенный персонаж из игры Talebreak. Одноглазый взъерошенный мужчина с золотым зубом и красной бабочкой. Его можно встретить вечером 1 дня, если пойти на арену. Там он предложит Валиасу сразиться с одним из 4 противников на выбор: Стражник (лёгкий), Атлет (средний), Эльф-воин (тяжёлый), Крестьянин (очень сложный).",
            wikiBanditP1: "Может представлять опасность из-за наличия карт с ранами и неуязвимостью, но вполне побеждаем стартовой колодой.",
            wikiBanditIntro: "Тёмный бандит — противник из игры Talebreak. Встречается как случайная встреча в середине 1 дня, если помочь гоблину-торговцу вернуть его драгоценности. Один из первых противников в игре. Второй раз может встретиться в середине 2 дня, если отправиться с гоблином-доставщиком в сопровождение: он наносит удар ножом Валиасу.",
            wikiMageP1: "В зависимости от действий игрока может научить Лили смертельному заклинанию «Ужас», выдаёт задание на поимку Миркиама.",
            wikiMageIntro: "Маг (не путать с Пифием!) — второстепенный персонаж из игры Talebreak. Глава Магократии, видный маг, встречающийся героям в середине 1 дня в Башне Магов. Отстранённый и официальный в общении. Рассказывает об устройстве магии в мире и контактах государства с ней.",
            wikiGoblinDeliveryIntro: "Гоблин-доставщик — квестодатель в игре Talebreak. Гоблин, сидящий за стойкой на торговом квартале днём 2 дня. Даёт задание на сопровождение груза вместе с ним, в ходе которого Валиаса ранит Тёмный Бандит, рассказывается об устройстве жилого квартала, и в конце команда получает 1 достаток; путешествие занимает весь оставшийся день.",
            wikiMorikIntro: "Морик — квестодатель из игры Talebreak. Вольный моряк-путешественник, которого можно впервые встретить вечером 1 дня в торговом квартале, а затем второй раз вечером 2 дня там же. Он рассказывает героям о мироустройстве и просит за день накопить 5 репутации у добряков. Если успешно выполнить это задание и сдать ему, в награду он подарит Миникоровку — особый предмет.",
            wikiGnomShadowIntro: "Странная фигура — персонаж из игры Talebreak. Таинственная тёмная фигура гнома, которую герои могут встретить вечером 1 дня в торговом квартале. Предлагает за деньги поднять репутацию команды у добряков и злодеев. Его также можно сдать страже, отобрав его золото, что приведёт к потере репутации у добряков и злодеев.",
            wikiKinnyIntro: "Кинни — второстепенный персонаж из игры Talebreak. Большой мужчина в тёмном, постоялец Ночевальни и бывший строитель из Равниполя, уволенный незадолго до событий игры. Лили встречает его утром 2 дня и может завязать диалог. Он рассказывает о странном существе, увиденном им ранее, о Лорде Геллии — «лорде свободы» из легенды, поддерживает жестокость трактирщика к Элизи и отказывается разбираться с барьером в канализации.",
            wikiWhiteCatIntro: "Кот-напёрсточник — второстепенный персонаж из игры Talebreak. Белый кот в бежевых одеяниях с красными глазами и довольной мордой. Появляется как случайная встреча утром 2 дня, предлагая Валиасу сыграть с ним в напёрстки. Говорит с мяу-акцентом и крайне не заинтересован в общении. Играет с людьми на боевые карты.",
            wikiVjdrihIntro: "Вждрих — второстепенный персонаж из игры Talebreak. Эльф-архивариус городской библиотеки. Встречается как зазывала в середине 2 дня в торговом квартале, где просит героев помочь ему. Если согласиться, команда пойдёт сортировать книги и разговаривать о мифах. Является неуверенным в себе человеком, довольным маленькой работой в библиотеке. Боится высоты. Помощь ему не занимает весь день, после него можно вернуться на рынок.",
            wikiPiphiyP1: "Маг Пифий — второй из двух персонажей со второй фазой в бою (первый — Миркиам). Каждый из трёх боёв с ним становится всё сложнее из-за комплектования колоды: в виде мини-босса у него 15 карт, в первой фазе финального босса — 22, во второй — 31. Колода мага заточена на ослабление игрока и замедление его игры, поэтому он может быть крайне неприятным противником.",
            wikiPiphiyIntro: "Пифий — главный антагонист из I эпизода игры Talebreak. Человеческий маг в голубых одеяниях, отмеченный в легенде как «тот, чей свет потух». Упоминается рыбаком Альбрехтом во время допроса, впервые встречается ночью 1 дня в канализации в собственном укрытии, находится в панике от неожиданного прихода героев. Является также мини-боссом, первым вводящим механику мифических карт. Второй раз встречается уже как финальный босс ночью 2 дня, находится в состоянии прострации и также является чёрно-белым. По итогу сражения Пифий присоединяется к команде и становится третьим героем, восстанавливая цвет.",
            wikiMirkiamP3: "В награду за победу герои получают Радужный сгусток и одну из сильных карт на выбор. В дальнейшем Миркиам может быть убит или сдан магам. В случае поражения награды не будет, кобольд улетит, но стойкость герои не потеряют.",
            wikiMirkiamP2: "Его особая механика — пожар: у игрока есть таймер в 3 минуты на обе фазы. Когда таймер достигает 0, каждую секунду команда теряет по 4 здоровья, что практически гарантирует поражение. Для победы необходима серьёзная подготовка; стартовой колодой его почти нереально победить.",
            wikiMirkiamP1: "Миркиам является самым сложным противником эпизода: его карты наносят крайне много урона, а сам он имеет достаточно много здоровья. Это немного компенсируется высокой стоимостью карт, отсутствием неуязвимости и крайне малым запасом лечения и брони. Миркиам — один из двух персонажей, имеющих вторую фазу (второй — Пифий), поэтому надо играть осторожно. Босс имеет 5 мифических карт и 15 обычных.",
            wikiMirkiamIntro: "Миркиам — секретный босс из I эпизода игры Talebreak. Превращённая в кобольда версия Мириама. Для открытия необходимо взять с собой мальчика, оставить его внизу Башни Магов, узнать о его местоположении у Бальбаша и ночью 2 дня пойти искать его в портовый район. При встрече считает героев предателями и злодеями, намеревается стать настоящим героем. Поджигает трухлявый дом, в котором сидел, и вступает в схватку с командой.",
            wikiIrvinIntro: "Ирвин — персонаж из игры Talebreak. Гном-пивовар, нечистый на руку. Является конкурентом и недоброжелателем Бальбаша, встречается утром 2 дня и просит героев помочь ему украсть у трактирщика бочки с пивом. Если помочь ему — попытается обмануть с оплатой, но будет принуждён Валиасом к выплате. Его также можно сдать Бальбашу, и тогда он пропадёт навсегда.",
            wikiShutIntro: "Шут — второстепенный персонаж из игры Talebreak. Королевский шут, снующий по замку и говорящий перевёрнутыми предложениями. Появляется утром 2 дня и просит героев пойти за ним. Если согласиться, то он скажет, что команда — это пришельцы, покажет нарисованную летающую тарелку и ударит Валиаса мячиком, отчего игрок лишится 1 карты. Чёрно-белый.",
            wikiDruidTrialItem3: "«Вы бы могли сделать что-то страшное..?» — нет",
            wikiDruidTrialItem2: "«Вы верите в легенду?» — да",
            wikiDruidTrialItem1: "«Вы хотите богатства?» — да",
            wikiDruidTrialListTitle: "Правильные ответы:",
            wikiVillainsItem4: "скелеты-подручные Пифия",
            wikiKingIntro: "Король — самый неважный важный второстепенный персонаж игры Talebreak. Правитель Королевства Добра, свято верующий в пророчество, неуверенный и сомневающийся монарх. Он умоляет команду помочь с агентами зла, не зная о них ничего. Не обладает авторитетом в народе. Рассказывает официальный взгляд государства на происходящее в мире.",
            catSecondary: "Второстепенные",
            backToProps: "← Назад к декорациям",
            wipNotice: "Страница пока пустует. Заглядывай позже.",
            mysteryText: "И возможно, кто-то ещё?..",
            // ===== Вики-статьи (персонажи, фракции, события) =====
            kindMain: "Главный герой",
            kindImportant: "Важный персонаж",
            kindEvent: "Событие",
            wikiValiasP1: "Склонен к употреблению спиртного и жестокости. Постоянно пытается добиться своего силой и из-за этого одёргивается Лили — своей подругой и единственным человеком, на которого его агрессия не распространяется.",
            wikiValiasP2: "В зависимости от действий игрока может либо ограничивать себя, либо часто обманывать, бить и влиять на всех вокруг.",
            wikiValiasIntro: "Рыцарь Валиас (от англ. Wall — стена) — один из главных героев игры Talebreak. Циничный, ленивый, жадный, но крайне верный друзьям, хитрый и проницательный.",
            wikiLilyP1: "Она стремится помогать всем вокруг, выслушать, поддержать, ограничивает негативные черты Валиаса и пытается сделать его лучше, без давления. Чаще всего убеждает его сделать что-либо или согласиться с чем-то.",
            wikiLilyP2: "В зависимости от действий игрока либо успешно добивается своего, либо постоянно осуждает рыцаря за его действия. Может проникнуться материнской заботой к мальчику Мириаму или помочь Гракку уйти из Большегорода.",
            wikiLilyIntro: "Лекарь Лили (от цветка лилии) — одна из главных героев игры Talebreak. Добрая, спокойная, принимающая, но доверчивая, неуверенная в себе и слабая физически. Единственная владеет магией в команде.",
            wikiKlyaksonskiP1: "Считает себя настоящим главным злодеем, Лордом Смерти и Чёрным Рыцарем, планирует победить Лорда Хребца из легенды и управлять миром. Абсолютно безвреден, разбрасывается детскими угрозами и отказывается драться с героями при встрече. Встречается дважды: в середине 1 дня на главной площади и утром 2 дня по дороге в королевский замок на улице.",
            wikiKlyaksonskiP2: "В зависимости от действий игрока может попытаться побить мальчика Мириама и дразнит его скороговорками. В любом случае уходит из Большегорода.",
            wikiKlyaksonskiIntro: "Мистер Кляксонски (от слова «клякса») — персонаж игры Talebreak. Самовлюблённый, наглый мужчина в неровно покрашенном в чёрный костюме стражи, с приклеенным к шлему рогом и с чёрно-зелёным плащом, на котором от руки написано «Злодей».",
            wikiBalbashP1: "Он добровольно кормит героев, сдаёт им бесплатное жильё за ненужностью, интересуется новостями из их приключения и даёт информацию о жителях города. Расово терпим, зато жестоко эксплуатирует собственного работника Элизи — повара-уборщика, официанта, охранника Ночевальни, занимается контрабандой и продажей секретов жителей города. Самовлюблённый — в таверне находится огромный плакат с ним и маленький портрет короля.",
            wikiBalbashP2: "В зависимости от действий игрока поддерживает избиение орка, сдаёт жильё эльфу-неудачнику Вильязу, продаёт вещи и карты команде. Хорошо ладит с Валиасом, нейтрально-пренебрежительно относится к Лили, поддерживает игру на фортепиано, может быть ограблен. Относится к королю пренебрежительно. Его таверна имеет больше всего положительных исходов в концовках I эпизода.",
            wikiBalbashIntro: "Бальбаш — хозяин таверны «Ночевальня» в игре Talebreak. Хитрый и видящий во всём выгоду торговец, владеет главным игровым хабом в первом эпизоде.",
            wikiKingP1: "Король — самый неважный важный второстепенный персонаж игры Talebreak. Настоящее имя — Семтиний. Правитель Королевства Добра, свято верующий в пророчество, неуверенный и сомневающийся монарх. Он умоляет команду помочь с агентами зла, не зная о них ничего. Не обладает авторитетом в народе. Рассказывает официальный взгляд государства на происходящее в мире.",
            wikiElarikP1: "В зависимости от действий игрока может преподать урок боёвки. Помогает персонажам найти способ разрушить барьер в канализации.",
            wikiElarikIntro: "Эларик — сир Роберт Эларик, второстепенный персонаж игры Talebreak. Старый умелый военный, глава Королевской Стражи, выдающий снаряжение героям. Объясняет основы боя, механики игры и даёт направление движения команде. Не думает о пророчестве, всегда концентрируется на конкретных задачах, поставленных руководством.",
            wikiVilyazP1: "В зависимости от действий игрока может расплатиться с долгами и решить сменить деятельность, либо будет окончательно разбит и подавлен.",
            wikiVilyazIntro: "Вильяз — квестодатель из игры Talebreak. Эльф, живущий в Ночевальне. Нервный, пугливый, неудачливый торговец, неудачи которого завели его в долги. Жена прогнала его с заданием найти семейные драгоценности, чтобы расплатиться, и он украл из библиотеки книгу по некромантии, намереваясь вызвать дух своей тёщи и узнать, где золото. Призрак унижает его, все вокруг считают неудачником, Лили же жалеет.",
            wikiGrakkP1: "В зависимости от действий игрока может решить отправиться в город злодеев рассказывать сказки своим сородичам-гноллам или остаться в Большегороде.",
            wikiGrakkIntro: "Гракк — персонаж из игры Talebreak. Появляется как случайная встреча по пути героев в портовый квартал в середине 1 дня первого эпизода. Гнолл-маргинал, живущий на помойке. Экспрессивный, весёлый, активный, но тайно неуверенный в себе творческий рассказчик, неудачно зазывающий всех вокруг посмотреть его сказку. Зовёт также и героев, пугая Лили.",
            wikiMiriamP1: "В зависимости от действий героев может пойти с ними либо заплакать и уйти. Если взять его с собой и оставить внизу у Башни Магов, превращается в Миркиама — секретного босса I эпизода. Если держать его под присмотром — путешествует с командой по вечернему рынку и участвует в приключениях вплоть до ночи.",
            wikiMiriamIntro: "Мириам — особый персонаж игры Talebreak. Мальчик 10–11 лет в деревянной броне, с щитом и мечом, неграмотный и гиперактивный. Появляется после допроса рыбака Альбрехта и просит героев взять его с собой. Сразу же вызывает умиление у Лили и полную незаинтересованность у Валиаса, видит в героях свой идеал.",
            wikiGoodfolkP1: "Добряки — жители Королевства Добра, условно «добрые» расы: люди, эльфы, гномы, полурослики.",
            wikiGoodfolkListTitle: "Яркие представители:",
            wikiGoodfolkItem1: "Бальбаш",
            wikiGoodfolkItem2: "Эларик",
            wikiGoodfolkItem3: "Вильяз",
            wikiGoodfolkItem4: "Король",
            wikiGoodfolkItem5: "сами герои",
            wikiGoodfolkItem6: "бандит из подворотни",
            wikiGoodfolkItem7: "Ирвин",
            wikiVillainsP1: "Злодеи — жители Королевства Зла, условно «злые» расы: орки, гоблины, скелеты, гноллы, зомби.",
            wikiVillainsListTitle: "Яркие представители:",
            wikiVillainsItem1: "орк-алкаш",
            wikiVillainsItem2: "Гракк",
            wikiVillainsItem3: "гоблин-доставщик",
            wikiDruidTrialP1: "Проверка от друида — событие в игре Talebreak. В таверне «Ночевальня» друид просит героев ответить на ряд его абстрактных вопросов, связанных с судьбой. В зависимости от ответов он может дать туманную подсказку о справедливости — либо добровольно, либо под угрозой от Валиаса. В противном случае он просто уходит.",
            wikiDruidTrialP2: "В зависимости от ответов героев он может дать туманную подсказку о справедливости — либо добровольно, либо под угрозой от Валиаса. В противном случае он просто уходит.",
            wikiMightyRangersP1: "Могучие рейнджеры — событие в игре Talebreak. Одна из случайных встреч по пути героев в портовый квартал в середине 1 дня первого эпизода. Мужчина в британской военной форме и чёрном цилиндре зазывает героев попробовать силы на аркадном силомере. В зависимости от выбранного персонажа команда может получить золото.",
            wikiMightyRangersP2: "Результаты героев фиксированные: Валиас — 74, Лили — 39.",
            wikiFishermanInterrogationP1: "Допрос рыбака — событие в игре Talebreak. Обязательное сюжетное событие, связанное с допросом рыбака из портового района Альбрехта Виннигема. Он рассказывает, как видел утром у алтаря, где появились герои, странную фигуру человека. Некоторые моменты его рассказа вызывают вопросы. В зависимости от действий игрока Валиас может силой добиться ответов от рыбака.",
            wikiFishermanInterrogationListTitle: "Результаты давлений:",
            wikiFishermanInterrogationItem1: "0 — рыбак не рассказывает ничего нового",
            wikiFishermanInterrogationItem2: "1 — рыбак рассказывает, как приставал к продавщице в центре города",
            wikiFishermanInterrogationItem3: "2 — рыбак напуган, но ничего больше не знает",
            progressLabel: "ПРОГРЕСС ВТОРОЙ ГЛАВЫ",
            timerPrefix: "До релиза 2 эпизода: ",
            timerDays: "дн",
            timerHours: "ч",
            timerMins: "мин",
            timerSecs: "сек",
            timerEnded: "Релиз 2 эпизода состоялся!",
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
            aboutText: "Talebreak is a visual novel about a children's puppet show staging the tale of heroes who defeat evil. But what if the inhabitants know the role they are destined to play — and what is it like to live knowing that with the finale you simply vanish?\n\nYou don't play as the heroes — you are an interactive spectator guiding their path through card battles, mini-games and a light RPG system with reputation and remembered choices. The game will come out in 6 episodes, first one is done and the second is in the works now. It will be completely free - the only currency we need from you is your attention.",
            teasersTitle: "Teasers",

            // Wardrobe — platform notes
            subGamejolt: "GameJolt — for everyone",
            subVkplay: "VK Play — for Russian speakers",
            subItch: "Itch.io — for English speakers",
            subTelegram: "Telegram — for the alternative crowd",

            // Props — categories
            catMain: "Main heroes",
            catImportant: "Important characters",
            catEvents: "Events",
            wikiSewerLabyrinthP2: "Dead-end contents and the labyrinth map will be added later.",
            wikiSewerLabyrinthP1: "Sewer Labyrinth — a set of location nodes inside Bigcity's sewers. 11 dead ends and 23 branches. Appears twice: nights of Day 1 and Day 2. A map in point 5 can help with navigation.",
            wikiMerchantsCourtP2: "A wrong verdict gives 1 Prosperity. A correct one awards the special item Pocket Goldseeker.",
            wikiMerchantsCourtP1: "Merchants' Court — an event in Talebreak. One of the entertainment branches in the market district mid-Day 2. Two merchants argue over a stall and ask Valias to judge. The guilty party is random; clues are document dates, fish source, the mayor's location, and how deputies filled the papers.",
            wikiSoldatomaniaP3: "By the wall the heroes can crawl into a hole Balbash mentioned on Day 1. There they find an Amulet and a fight with Something. After finding a rune piece in the barracks, Valias may settle a conflict between guards; it is optional and gives no reward.",
            wikiSoldatomaniaP2: "At the officers' house for a rune shard there are 3 paths: if goodfolk reputation is 6+, the shard is free; otherwise it costs any card or 1 Prosperity.",
            wikiSoldatomaniaP1: "Soldatomania — a set of events in Talebreak. Mandatory story content on Day 2: searching for an anti-magic rune to open the sewer barrier. Includes the officers' house, a walk by the fortress wall, and the barracks.",
            wikiCheatTheCheaterP1: "Outsmart the Cheater — an event in Talebreak. A random encounter on the morning of Day 2 in Nightkeep. Valias sees a catfolk shell-game hustler. The player must guess which of 3 cups hides the ball. Reward: the card \"Luck\".",
            wikiBattleVsWorldItem4: "Win in final — 2 Prosperity",
            wikiBattleVsWorldItem3: "Loss in final — 1 Prosperity",
            wikiBattleVsWorldItem2: "Loss in semifinal — nothing",
            wikiBattleVsWorldItem1: "Loss in quarterfinal — nothing",
            wikiBattleVsWorldListTitle: "Rewards:",
            wikiBattleVsWorldP1: "Battle Against the World — an event in Talebreak. A random encounter on the morning of Day 2 in Nightkeep. Valias sees an arm-wrestling championship. The tournament is 3 mini-games of rapid single-button presses; auto-win is available for Prosperity.",
            wikiMohovichIntro: "Mokhovich — Bor Mokhovich, a minor character in Talebreak. The tallest halfling in Bigcity, a druid who keeps a personal zoo in one of the market tents. Met mid-Day 2 if you walk the market.",
            wikiSkeletonsP1: "As opponents they pose little threat: their decks are easy for the starter deck, and in the sparring their deck and stats are further reduced.",
            wikiSkeletonsIntro: "Skeleton Minions — minor characters in Talebreak. The only agents of evil in the city, summoned by Pythius. They stole robes from the Mage Tower. Completely incompetent and harmless. Met on the night of Day 1 in the sewers before the mage's room — the first mandatory story fight. May appear again mid-Day 2 in the market district if you check the alley (only if no branch choice has been made yet; the scene does not take the whole time).",
            wikiArenaMasterP1: "Different combat cards are rewarded by difficulty. No cash prize. Tactics vary: the Guard is easy with the starter deck, the Athlete is tougher, the Elf Warrior needs focus and luck, and the Peasant fight is largely luck-based.",
            wikiArenaMasterIntro: "Arena Master — a minor character in Talebreak. A one-eyed unkempt man with a gold tooth and a red bow tie. Met on the evening of Day 1 if you go to the arena. He offers Valias a fight against one of four opponents: Guard (easy), Athlete (medium), Elf Warrior (hard), Peasant (very hard).",
            wikiBanditP1: "Can be dangerous due to wound and invulnerability cards, but is beatable with the starter deck.",
            wikiBanditIntro: "Dark Bandit — an enemy in Talebreak. Appears as a random encounter mid-Day 1 if you help a goblin merchant recover his valuables. One of the first opponents. May appear again mid-Day 2 during the goblin courier escort, stabbing Valias.",
            wikiMageP1: "Depending on the player's choices, he may teach Lily the deadly spell \"Horror\" and gives a quest to capture Mirkiam.",
            wikiMageIntro: "The Mage (not to be confused with Pythius!) — a minor character in Talebreak. Head of the Magocracy, a prominent mage met mid-Day 1 in the Mage Tower. Distant and formal. Explains how magic works in the world and the state's contacts with it.",
            wikiGoblinDeliveryIntro: "Goblin Courier — a quest giver in Talebreak. A goblin at a market stall on Day 2 midday. Gives an escort job during which the Dark Bandit wounds Valias; the residential district is explained, and at the end the party gains 1 Prosperity. The trip takes the rest of the day.",
            wikiMorikIntro: "Morik — a quest giver in Talebreak. A free sailor-traveler first met on the evening of Day 1 in the market district, and again on the evening of Day 2 there. He tells the heroes about the world's structure and asks them to gain 5 goodfolk reputation in a day. Completing and turning in the quest rewards Mini-Cow — a special item.",
            wikiGnomShadowIntro: "Strange Figure — a character in Talebreak. A mysterious dark figure of a gnome the heroes may meet on the evening of Day 1 in the market district. For money he offers to raise the party's reputation with goodfolk and villains. He can also be turned in to the guards, taking his gold, which costs reputation with both goodfolk and villains.",
            wikiKinnyIntro: "Kinny — a minor character in Talebreak. A large man in dark clothes, a Nightkeep lodger and former builder from Flatfields, fired shortly before the game's events. Lily meets him on the morning of Day 2 and can start a dialogue. He talks about a strange creature he saw, about Lord Hellia — the \"lord of freedom\" from the legend, supports the innkeeper's cruelty toward Elizi, and refuses to deal with the sewer barrier.",
            wikiWhiteCatIntro: "Shell-game Cat — a minor character in Talebreak. A white cat in beige clothes with red eyes and a smug face. Appears as a random encounter on the morning of Day 2, offering Valias a shell game. Speaks with a meow accent and has little interest in conversation. Plays people for combat cards.",
            wikiVjdrihIntro: "Vzhdrikh — a minor character in Talebreak. An elf archivist at the city library. Appears as a promoter mid-Day 2 in the market district and asks the heroes for help. If they agree, the party sorts books and talks about myths. He is insecure and content with a small library job. Afraid of heights. Helping him does not take the whole day; afterward you can return to the market.",
            wikiPiphiyP1: "Pythius is the second of two characters with a second combat phase (the first is Mirkiam). Each of the three fights grows harder as his deck expands: 15 cards as mini-boss, 22 in the final boss phase 1, 31 in phase 2. His deck focuses on weakening the player and slowing their game, making him a very unpleasant opponent.",
            wikiPiphiyIntro: "Pythius — the main antagonist of Episode I in Talebreak. A human mage in blue robes, named in the legend as \"the one whose light has gone out\". Mentioned by fisherman Albrecht during interrogation; first met on the night of Day 1 in the sewers in his hideout, panicking at the heroes' arrival. He is also a mini-boss and the first to introduce mythic cards. He appears again as the final boss on the night of Day 2, in a state of stupor and black-and-white. After the fight he joins the party as the third hero and regains his color.",
            wikiMirkiamP3: "Victory rewards a Rainbow Clot and one strong card of choice. Later Mirkiam can be killed or handed over to the mages. On defeat there is no reward; the kobold flies away, but the heroes do not lose Resolve.",
            wikiMirkiamP2: "His special mechanic is fire: the player has a 3-minute timer for both phases. When it hits zero, the party loses 4 HP every second, which almost guarantees defeat. Serious preparation is required; the starter deck can barely beat him.",
            wikiMirkiamP1: "Mirkiam is the hardest opponent of the episode: his cards deal massive damage and he has a lot of health. This is partly offset by high card costs, no invulnerability, and very little healing or armor. He is one of two characters with a second phase (the other is Pythius). The boss has 5 mythic cards and 15 regular ones.",
            wikiMirkiamIntro: "Mirkiam — the secret boss of Episode I in Talebreak. A kobold version of Miriam. To unlock him, take the boy along, leave him at the foot of the Mage Tower, learn his location from Balbash, and search the port district on the night of Day 2. On meeting the party he sees them as traitors and villains and intends to become a true hero. He sets fire to the rotting house he was sitting in and fights the party.",
            wikiIrvinIntro: "Irvin — a character in Talebreak. A shady gnome brewer. Rival and enemy of Balbash; appears on the morning of Day 2 and asks the heroes to help steal beer barrels from the innkeeper. If they help, he tries to cheat on payment but is forced by Valias to pay. He can also be turned in to Balbash, in which case he disappears for good.",
            wikiShutIntro: "The Jester — a minor character in Talebreak. The royal jester who wanders the castle speaking in reversed sentences. Appears on the morning of Day 2 and asks the heroes to follow him. If they agree, he says the party are aliens, shows a drawn flying saucer and hits Valias with a ball, making the player lose 1 card. Black-and-white.",
            wikiDruidTrialItem3: "\"Could you do something terrible..?\" — no",
            wikiDruidTrialItem2: "\"Do you believe in the legend?\" — yes",
            wikiDruidTrialItem1: "\"Do you want wealth?\" — yes",
            wikiDruidTrialListTitle: "Correct answers:",
            wikiVillainsItem4: "Pythius's skeleton minions",
            wikiKingIntro: "The King — the least important important minor character in Talebreak. Ruler of the Kingdom of Good, a devout believer in the prophecy, and an insecure, doubting monarch. He begs the party to help against the agents of evil, knowing nothing about them. He holds no real authority among the people. He presents the kingdom's official view of what is happening in the world.",
            catSecondary: "Supporting cast",
            backToProps: "← Back to props",
            wipNotice: "This page is still empty. Check back later.",
            mysteryText: "And perhaps... someone else?..",
            // ===== Wiki articles (characters, factions, events) =====
            kindMain: "Main hero",
            kindImportant: "Important character",
            kindEvent: "Event",
            wikiValiasP1: "Inclined to drink and cruelty. Constantly tries to get his way by force and is pulled back by Lily — his friend and the only person his aggression does not reach.",
            wikiValiasP2: "Depending on the player's choices, he may restrain himself or frequently lie, strike, and influence everyone around him.",
            wikiValiasIntro: "Knight Valias (from English Wall) — one of the main heroes of Talebreak. Cynical, lazy, greedy, yet deeply loyal to friends, cunning and perceptive.",
            wikiLilyP1: "She strives to help everyone, to listen and support, restrains Valias's darker traits and tries to make him better without pressure. Most often she persuades him to do or agree to something.",
            wikiLilyP2: "Depending on the player's choices, she either gets her way or constantly condemns the knight for his actions. She may develop maternal care for the boy Miriam or help Grakk leave Bigcity.",
            wikiLilyIntro: "Healer Lily (from the lily flower) — one of the main heroes of Talebreak. Kind, calm, and accepting, but trusting, insecure, and physically weak. The only member of the party who wields magic.",
            wikiKlyaksonskiP1: "He believes himself to be the one true main villain, the Lord of Death and the Black Knight, and plans to defeat the Lord of the Ridge from the legend and rule the world. Completely harmless — he throws around childish threats and refuses to fight the heroes. He appears twice: mid-Day 1 on the main square, and on the morning of Day 2 on the street toward the royal castle.",
            wikiKlyaksonskiP2: "Depending on the player's choices, he may try to hit the boy Miriam and teases him with tongue-twisters. Either way, he leaves Bigcity.",
            wikiKlyaksonskiIntro: "Herr Blotelburg (from the word \"blot\") — a character in Talebreak. A self-absorbed, brazen man in a guard's uniform unevenly painted black, with a horn glued to his helmet and a black-and-green cloak with \"Villain\" handwritten on it.",
            wikiBalbashP1: "He willingly feeds the heroes, gives them free lodging he does not need, asks for news of their adventure, and shares information about the townsfolk. Racially tolerant, yet he ruthlessly overworks his own employee Elizi — cook, cleaner, waiter and guard of Nightkeep — and deals in smuggling and selling the residents' secrets. Vain: the tavern has a huge poster of him and a small portrait of the king.",
            wikiBalbashP2: "Depending on the player's choices, he may condone beating an orc, rents a room to the down-on-his-luck elf Vilyaz, and sells items and cards to the party. He gets along well with Valias, treats Lily with neutral disregard, supports piano playing, and can be robbed. He looks down on the king. His tavern has the most positive endings in Episode I.",
            wikiBalbashIntro: "Balbash — owner of the Nightkeep tavern in Talebreak. A shrewd merchant who sees profit in everything; he runs the main gameplay hub of Episode I.",
            wikiKingP1: "The King — the least important important minor character in Talebreak. His real name is Semtinius. The ruler of the Kingdom of Good, a devout believer in the prophecy, and an insecure, doubting monarch. He begs the party to help against the agents of evil, knowing nothing about them. He holds no real authority among the people. He presents the kingdom's official view of what's happening in the world.",
            wikiElarikP1: "Depending on the player's choices, he may give a combat lesson. He helps the characters find a way to break the barrier in the sewers.",
            wikiElarikIntro: "Elarik — Sir Robert Elarik, a minor character in Talebreak. An old skilled soldier, head of the Royal Guard, who issues gear to the heroes. Explains combat basics, game mechanics, and gives the party direction. He does not dwell on the prophecy and focuses on concrete tasks from leadership.",
            wikiVilyazP1: "Depending on the player's choices, he may pay off his debts and change his trade, or be left broken and crushed.",
            wikiVilyazIntro: "Vilyaz — a quest giver in Talebreak. An elf living at Nightkeep. Nervous, timid, and unlucky merchant whose failures left him in debt. His wife sent him to find family jewels to pay up; he stole a necromancy book from the library intending to summon his mother-in-law's spirit and learn where the gold is. The ghost humiliates him; everyone sees him as a failure, while Lily pities him.",
            wikiGrakkP1: "Depending on the player's choices, he may leave for the villain city to tell stories to his fellow gnolls, or stay in Bigcity.",
            wikiGrakkIntro: "Grakk — a character in Talebreak. Appears as a random encounter on the way to the port district mid-Day 1 of Episode I. A marginalized gnoll living on a dump. Expressive, cheerful, active, but secretly insecure creative storyteller who fails at drawing crowds to his tale. He invites the heroes too, scaring Lily.",
            wikiMiriamP1: "Depending on the heroes' choices, he may join them or cry and leave. If taken along and left at the foot of the Mage Tower, he turns into Mirkiam — the secret boss of Episode I. If kept under watch, he travels with the party through the evening market and joins the adventures until night.",
            wikiMiriamIntro: "Miriam — a special character in Talebreak. A boy of 10–11 in wooden armor, with a shield and a sword, illiterate and hyperactive. He appears after the interrogation of the fisherman Albrecht and asks the heroes to take him along. He immediately delights Lily and leaves Valias completely uninterested; he sees the heroes as his ideal.",
            wikiGoodfolkP1: "Goodfolk — residents of the Kingdom of Good, the nominally \"good\" races: humans, elves, dwarves, halflings.",
            wikiGoodfolkListTitle: "Notable examples:",
            wikiGoodfolkItem1: "Balbash",
            wikiGoodfolkItem2: "Elarik",
            wikiGoodfolkItem3: "Vilyaz",
            wikiGoodfolkItem4: "the King",
            wikiGoodfolkItem5: "the heroes themselves",
            wikiGoodfolkItem6: "the alley thug",
            wikiGoodfolkItem7: "Irvin",
            wikiVillainsP1: "Villains — residents of the Kingdom of Evil, the nominally \"evil\" races: orcs, goblins, skeletons, gnolls, zombies.",
            wikiVillainsListTitle: "Notable examples:",
            wikiVillainsItem1: "the drunkard orc",
            wikiVillainsItem2: "Grakk",
            wikiVillainsItem3: "goblin courier",
            wikiDruidTrialP1: "The Druid's Trial — an event in Talebreak. In the Nightkeep tavern a druid asks the heroes a series of abstract questions about fate. Depending on the answers he may give a vague hint about justice — either willingly or under threat from Valias. Otherwise he simply leaves.",
            wikiDruidTrialP2: "Depending on the heroes' answers, he may give a vague hint about justice — either willingly, or under threat from Valias. Otherwise, he simply leaves.",
            wikiMightyRangersP1: "Mighty Rangers — an event in Talebreak. One of the random encounters on the way to the port district mid-Day 1 of Episode I. A man in a British military uniform and a black top hat invites the heroes to try an arcade strength tester. Depending on the chosen character the party may receive gold.",
            wikiMightyRangersP2: "Fixed scores: Valias — 74, Lily — 39.",
            wikiFishermanInterrogationP1: "The Fisherman's Interrogation — an event in Talebreak. A mandatory story event involving the interrogation of Albrecht Winnigem, a fisherman from the port district. He recounts seeing a strange human figure that morning near the altar where the heroes appeared. Certain details of his story raise questions. Depending on the player's choices, Valias may force answers out of the fisherman.",
            wikiFishermanInterrogationListTitle: "Pressure outcomes:",
            wikiFishermanInterrogationItem1: "0 — the fisherman reveals nothing new",
            wikiFishermanInterrogationItem2: "1 — the fisherman admits to harassing a shopkeeper in the city center",
            wikiFishermanInterrogationItem3: "2 — the fisherman is frightened, but knows nothing more",
            progressLabel: "CHAPTER 2 PROGRESS",
            timerPrefix: "Until Episode 2 release: ",
            timerDays: "d",
            timerHours: "h",
            timerMins: "min",
            timerSecs: "sec",
            timerEnded: "Episode 2 has been released!",
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

            // Таймер: при смене языка сразу перерисовываем текст
            // (если таймер активен и функция доступна).
            if (typeof refreshTimerText === 'function') {
                refreshTimerText();
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

        
