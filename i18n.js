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
            subTelegram: "Telegram — для неформалов",

            // Декорации — категории
            catMain: "Главные герои",
            catImportant: "Важные персонажи",
            catEvents: "События",
            backToProps: "← Назад к декорациям",
            wipNotice: "Страница пока пустует. Заглядывай позже.",
            mysteryText: "И возможно, кто-то ещё?..",
            // ===== Вики-статьи (персонажи, фракции, события) =====
            kindMain: "Главный герой",
            kindImportant: "Важный персонаж",
            kindEvent: "Событие",
            // Заголовки вики-страниц
            wikiTitle_lily: "Лили",
            wikiTitle_valias: "Валиас",
            wikiTitle_balbash: "Бальбаш",
            wikiTitle_elarik: "Эларик",
            wikiTitle_elaric: "Эларик",
            wikiTitle_grakk: "Гракк",
            wikiTitle_king: "Король",
            wikiTitle_klyaksonski: "Мистер Кляксонски",
            wikiTitle_miriam: "Мириам",
            wikiTitle_vilyaz: "Вильяз",
            wikiTitle_goodfolk: "Добряки",
            wikiTitle_good-guys: "Добряки",
            wikiTitle_villains: "Злодеи",
            wikiTitle_druid-trial: "Проверка от друида",
            wikiTitle_mighty-rangers: "Могучие рейнджеры",
            wikiTitle_fisherman-interrogation: "Допрос рыбака",
            wikiValiasP1: "Склонен к употреблению спиртного и жестокости. Постоянно пытается добиться своего силой и из-за этого одёргивается Лили — своей подругой и единственным человеком, на которого его агрессия не распространяется.",
            wikiValiasP2: "В зависимости от действий игрока может либо ограничивать себя, либо часто обманывать, бить и влиять на всех вокруг.",
            wikiValiasIntro: "Рыцарь Валиас (от англ. Wall — стена) — один из главных героев игры Talebreak. Циничный, ленивый, жадный, но крайне верный друзьям, хитрый и проницательный.",
            wikiLilyP1: "Она стремится помогать всем вокруг, выслушать, поддержать, ограничивает негативные черты Валиаса и пытается сделать его лучше, без давления. Чаще всего убеждает его сделать что-либо или согласиться с чем-то.",
            wikiLilyP2: "В зависимости от действий игрока либо успешно добивается своего, либо постоянно осуждает рыцаря за его действия. Может проникнуться материнской заботой к мальчику Мириаму или помочь Гракку уйти из Большегорода.",
            wikiLilyIntro: "Лекарь Лили (от цветка лилии) — одна из главных героев игры Talebreak. Добрая, спокойная, принимающая, но доверчивая, неуверенная в себе и слабая физически. Единственная владеет магией в команде.",
            wikiKlyaksonskiP1: "Считает себя настоящим главным злодеем, Лордом Смерти и Чёрным Рыцарем, планирует победить Лорда Хребца из легенды и управлять миром. Абсолютно безвреден, разбрасывается детскими угрозами и отказывается драться с героями при встрече.",
            wikiKlyaksonskiP2: "В зависимости от действий игрока может попытаться побить мальчика Мириама и дразнит его скороговорками. В любом случае уходит из Большегорода.",
            wikiKlyaksonskiIntro: "Мистер Кляксонски (от слова «клякса») — второстепенный персонаж игры Talebreak. Самовлюблённый, наглый мужчина в неровно покрашенном в чёрный костюме стражи, с приклеенным к шлему рогом и с чёрно-зелёным плащом, на котором от руки написано «Злодей».",
            wikiBalbashP1: "Он добровольно кормит героев, сдаёт им бесплатное жильё за ненужностью, интересуется новостями из их приключения и даёт информацию о жителях города. Главный идеолог идеи «не все добряки добрые и не все злодеи злые». При этом жестоко эксплуатирует собственного работника Элизи — повара-уборщика, официанта, охранника Ночевальни, занимается контрабандой и продажей секретов жителей города. Самовлюблённый — в таверне находится огромный плакат с ним и маленький обязательный портрет короля.",
            wikiBalbashP2: "В зависимости от действий игрока поддерживает избиение орка, сдаёт жильё эльфу-неудачнику Вильязу, продаёт вещи и карты команде. Хорошо ладит с Валиасом, нейтрально-пренебрежительно относится к Лили. Относится к королю пренебрежительно.",
            wikiBalbashIntro: "Бальбаш — хозяин таверны «Ночевальня» в игре Talebreak. Хитрый и видящий во всём выгоду торговец, владеет главным игровым хабом в первом эпизоде.",
            wikiKingP1: "Король — самый неважный важный второстепенный персонаж игры Talebreak. Настоящее имя — Семтиний. Правитель Королевства Добра, свято верующий в пророчество, неуверенный и сомневающийся монарх. Он умоляет команду помочь с агентами зла, не зная о них ничего. Не обладает авторитетом в народе. Рассказывает официальный взгляд государства на происходящее в мире.",
            wikiElarikP1: "В зависимости от действий игрока может преподать урок боёвки.",
            wikiElarikIntro: "Эларик — сир Роберт Эларик, второстепенный персонаж игры Talebreak. Старый умелый военный, глава Королевской Стражи, выдающий снаряжение героям. Объясняет основы боя, механики игры и даёт направление движения команде. Не думает о пророчестве, всегда концентрируется на конкретных задачах, поставленных руководством.",
            wikiVilyazP1: "В зависимости от действий игрока может расплатиться с долгами и решить сменить деятельность, либо будет окончательно разбит и подавлен.",
            wikiVilyazIntro: "Вильяз — квестодатель из игры Talebreak. Эльф, живущий в Ночевальне. Нервный, пугливый, неудачливый торговец, неудачи которого завели его в долги. Жена прогнала его с заданием найти семейные драгоценности, чтобы расплатиться, и он украл из библиотеки книгу по некромантии, намереваясь вызвать дух своей тёщи и узнать, где золото. Призрак унижает его, все вокруг считают неудачником, Лили же жалеет.",
            wikiGrakkP1: "В зависимости от действий игрока может решить отправиться в город злодеев рассказывать сказки своим сородичам-гноллам или остаться в Большегороде.",
            wikiGrakkIntro: "Гракк — персонаж из игры Talebreak. Появляется как случайная встреча по пути героев в портовый квартал в середине 1 дня первого эпизода. Гнолл-маргинал, живущий на помойке. Экспрессивный, весёлый, активный, но тайно неуверенный в себе творческий рассказчик, неудачно зазывающий всех вокруг посмотреть его сказку. Зовёт также и героев, пугая Лили.",
            wikiMiriamP1: "В зависимости от действий героев может пойти с ними либо заплакать и уйти.",
            wikiMiriamIntro: "Мириам — второстепенный персонаж игры Talebreak. Мальчик 10-11 лет в деревянной броне, с щитом и мечом, неграмотный и гиперактивный. Появляется после допроса рыбака Альбрехта и просит героев взять его с собой. Сразу же вызывает умиление у Лили и полную незаинтересованность у Валиаса, видит в героях свой идеал.",
            wikiGoodfolkP1: "Добряки — жители Королевства Добра, условно «добрые» расы: люди, эльфы, гномы, полурослики.",
            wikiGoodfolkListTitle: "Яркие представители:",
            wikiGoodfolkItem1: "Бальбаш",
            wikiGoodfolkItem2: "Эларик",
            wikiGoodfolkItem3: "Вильяз",
            wikiGoodfolkItem4: "Король",
            wikiGoodfolkItem5: "сами герои",
            wikiGoodfolkItem6: "бандит из подворотни",
            wikiGoodfolkItem7: "рыбак",
            wikiVillainsP1: "Злодеи — жители Королевства Зла, условно «злые» расы: орки, гоблины, скелеты, гноллы, зомби.",
            wikiVillainsListTitle: "Яркие представители:",
            wikiVillainsItem1: "орк-алкаш",
            wikiVillainsItem2: "Гракк",
            wikiVillainsItem3: "гоблин-богач",
            wikiDruidTrialP1: "Проверка от друида — событие в игре Talebreak. В таверне «Ночевальня» друид просит героев ответить на ряд его абстрактных вопросов, связанных с судьбой.",
            wikiDruidTrialP2: "В зависимости от ответов героев он может дать туманную подсказку о справедливости — либо добровольно, либо под угрозой от Валиаса. В противном случае он просто уходит.",
            wikiMightyRangersP1: "Могучие рейнджеры — событие в игре Talebreak. Является одной из случайных встреч по пути героев в портовый квартал в середине 1 дня первого эпизода. Мужчина в британской военной форме и чёрном цилиндре зазывает героев попробовать силы на аркадном силомере. В зависимости от выбранного персонажа команда может получить золото.",
            wikiMightyRangersP2: "Результаты героев фиксированные: Валиас — 74, Лили — 39.",
            wikiFishermanInterrogationP1: "Допрос рыбака — событие в игре Talebreak. Обязательное сюжетное событие, связанное с допросом рыбака из портового района Альбрехта Виннигема. Он рассказывает, как видел утром у алтаря, где появились герои, странную фигуру человека. Некоторые моменты его рассказа вызывают вопросы. В зависимости от действий игрока Валиас может силой добиться ответов от рыбака.",
            wikiFishermanInterrogationListTitle: "Результаты давлений:",
            wikiFishermanInterrogationItem1: "0 — рыбак не рассказывает ничего нового",
            wikiFishermanInterrogationItem2: "1 — рыбак рассказывает, как приставал к продавщице в центре города",
            wikiFishermanInterrogationItem3: "2 — рыбак напуган, но ничего больше не знает",
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
            subTelegram: "Telegram — for the alternative crowd",

            // Props — categories
            catMain: "Main heroes",
            catImportant: "Important characters",
            catEvents: "Events",
            backToProps: "← Back to props",
            wipNotice: "This page is still empty. Check back later.",
            mysteryText: "And perhaps... someone else?..",
            // ===== Wiki articles (characters, factions, events) =====
            kindMain: "Main hero",
            kindImportant: "Important character",
            kindEvent: "Event",
            // Wiki page titles
            wikiTitle_lily: "Lily",
            wikiTitle_valias: "Valias",
            wikiTitle_balbash: "Balbash",
            wikiTitle_elarik: "Elarik",
            wikiTitle_elaric: "Elarik",
            wikiTitle_grakk: "Grakk",
            wikiTitle_king: "The King",
            wikiTitle_klyaksonski: "Herr Blotelburg",
            wikiTitle_miriam: "Miriam",
            wikiTitle_vilyaz: "Vilyaz",
            wikiTitle_goodfolk: "Goodfolk",
            wikiTitle_good-guys: "Goodfolk",
            wikiTitle_villains: "Villains",
            wikiTitle_druid-trial: "The Druid's Trial",
            wikiTitle_mighty-rangers: "Mighty Rangers",
            wikiTitle_fisherman-interrogation: "The Fisherman's Interrogation",
            wikiValiasP1: "Prone to drinking and violence. He constantly tries to get his way through force, which is why he's kept in check by Lily — his companion and the only person his aggression never turns against.",
            wikiValiasP2: "Depending on the player's choices, he can either hold himself back, or frequently lie, strike, and push everyone around him.",
            wikiValiasIntro: "Knight Valias — one of the two main heroes of Talebreak. Cynical, lazy, and greedy, but fiercely loyal to his friends, cunning and perceptive.",
            wikiLilyP1: "She strives to help everyone around her, to listen and support, restrains Valias's negative traits and tries to make him better without pressure. She usually persuades him to do something or agree to something.",
            wikiLilyP2: "Depending on the player's choices, she either succeeds in getting her way or keeps condemning the knight for his actions. She may develop a motherly attachment to the boy Miriam, or help Grakk leave Bigcity.",
            wikiLilyIntro: "Healer Lily (named after the lily flower) — one of the two main heroes of Talebreak. Kind, calm, and accepting, but trusting, insecure, and physically weak. The only member of the party who wields magic.",
            wikiKlyaksonskiP1: "He believes himself to be the one true main villain, the Lord of Death and the Black Knight, and plans to defeat the Lord of the Ridge from the legend and rule the world. Completely harmless — he throws around childish threats and refuses to actually fight the heroes when they meet.",
            wikiKlyaksonskiP2: "Depending on the player's choices, he may try to hit the boy Miriam and teases him with tongue-twisters. Either way, he leaves Bigcity.",
            wikiKlyaksonskiIntro: "Herr Blotelburg (from the word \"blot\") — a minor character in Talebreak. A self-absorbed, brazen man in a guard's uniform unevenly painted black, with a horn glued to his helmet and a black-and-green cloak with «Villain» handwritten on it.",
            wikiBalbashP1: "He willingly feeds the heroes, hands them free lodging he doesn't need anyway, asks about news from their adventure, and shares information about the city's residents. The chief proponent of the idea that «not every good guy is good, and not every villain is evil». At the same time, he ruthlessly overworks his own employee Elizi — cook, cleaner, waiter, and guard of Nightkeep all in one — and dabbles in smuggling and selling the townsfolk's secrets. Vain — the tavern features a huge poster of him and a small, obligatory portrait of the king.",
            wikiBalbashP2: "Depending on the player's choices, he may condone the beating of an orc, rents a room to the down-on-his-luck elf Vilyaz, and sells items and cards to the party. He gets along well with Valias, treats Lily with neutral disregard, and looks down on the king.",
            wikiBalbashIntro: "Balbash — the owner of the «Nightkeep» tavern in Talebreak. A shrewd merchant who sees profit in everything, he runs the main gameplay hub of the first episode.",
            wikiKingP1: "The King — the least important important minor character in Talebreak. His real name is Semtinius. The ruler of the Kingdom of Good, a devout believer in the prophecy, and an insecure, doubting monarch. He begs the party to help against the agents of evil, knowing nothing about them. He holds no real authority among the people. He presents the kingdom's official view of what's happening in the world.",
            wikiElarikP1: "Depending on the player's choices, he may give a combat lesson.",
            wikiElarikIntro: "Elarik — Sir Robert Elarik, a minor character in Talebreak. An old, skilled soldier and captain of the royal guard who equips the heroes. He explains the basics of combat, the game's mechanics, and gives the party its direction. He doesn't dwell on the prophecy, always focusing on the concrete tasks assigned by his superiors.",
            wikiVilyazP1: "Depending on the player's choices, he may pay off his debts and decide to change his line of work, or be left completely broken and defeated.",
            wikiVilyazIntro: "Vilyaz — a quest-giver in Talebreak. An elf living in Nightkeep. A nervous, timid, unlucky merchant whose failures have buried him in debt. His wife threw him out with orders to find the family jewels to pay it all off, so he stole a necromancy book from the library, intending to summon his mother-in-law's spirit and learn where the gold is hidden. Her ghost humiliates him, everyone around sees him as a failure, while Lily takes pity on him.",
            wikiGrakkP1: "Depending on the player's choices, he may decide to head to the city of villains to tell stories to his fellow gnolls, or stay in Bigcity.",
            wikiGrakkIntro: "Grakk — a character in Talebreak. He appears as a random encounter on the heroes' way to the port district in the middle of Day 1 of the first episode. A marginalized gnoll living on a garbage heap. An expressive, cheerful, energetic — but secretly insecure — storyteller who fails to draw a crowd for his tale. He calls out to the heroes too, frightening Lily.",
            wikiMiriamP1: "Depending on the heroes' choices, he may either go with them or burst into tears and leave.",
            wikiMiriamIntro: "Miriam — a minor character in Talebreak. A 10-to-11-year-old boy in wooden armor, with a shield and sword, illiterate and hyperactive. He appears after the interrogation of the fisherman Albrecht and asks the heroes to take him along. He instantly melts Lily's heart and gets total indifference from Valias, seeing the heroes as everything he wants to be.",
            wikiGoodfolkP1: "Goodfolk — the inhabitants of the Kingdom of Good, the nominally «good» races: humans, elves, dwarves, and halflings.",
            wikiGoodfolkListTitle: "Notable examples:",
            wikiGoodfolkItem1: "Balbash",
            wikiGoodfolkItem2: "Elarik",
            wikiGoodfolkItem3: "Vilyaz",
            wikiGoodfolkItem4: "the King",
            wikiGoodfolkItem5: "the heroes themselves",
            wikiGoodfolkItem6: "the alley thug",
            wikiGoodfolkItem7: "the fisherman",
            wikiVillainsP1: "The Villains — the inhabitants of the Kingdom of Evil, the nominally «evil» races: orcs, goblins, skeletons, gnolls, and zombies.",
            wikiVillainsListTitle: "Notable examples:",
            wikiVillainsItem1: "the drunkard orc",
            wikiVillainsItem2: "Grakk",
            wikiVillainsItem3: "the rich goblin",
            wikiDruidTrialP1: "The Druid's Trial — an event in Talebreak. In the «Nightkeep» tavern, a druid asks the heroes to answer a series of his abstract questions related to fate.",
            wikiDruidTrialP2: "Depending on the heroes' answers, he may give a vague hint about justice — either willingly, or under threat from Valias. Otherwise, he simply leaves.",
            wikiMightyRangersP1: "Mighty Rangers — an event in Talebreak. One of the random encounters on the heroes' way to the port district in the middle of Day 1 of the first episode. A man in a British military uniform and a black top hat invites the heroes to test their strength on an arcade strength tester. Depending on the chosen character, the party may receive gold.",
            wikiMightyRangersP2: "The heroes' results are fixed: Valias — 74, Lily — 39.",
            wikiFishermanInterrogationP1: "The Fisherman's Interrogation — an event in Talebreak. A mandatory story event involving the interrogation of Albrecht Winnigem, a fisherman from the port district. He recounts seeing a strange human figure that morning near the altar where the heroes appeared. Certain details of his story raise questions. Depending on the player's choices, Valias may force answers out of the fisherman.",
            wikiFishermanInterrogationListTitle: "Pressure outcomes:",
            wikiFishermanInterrogationItem1: "0 — the fisherman reveals nothing new",
            wikiFishermanInterrogationItem2: "1 — the fisherman admits to harassing a shopkeeper in the city center",
            wikiFishermanInterrogationItem3: "2 — the fisherman is frightened, but knows nothing more",
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

        
