// ==========================================================
//  ГЕНЕРАЦИЯ БЛОКОВ ИЗ ДАННЫХ
// ==========================================================
// Строит DOM-блоки на основе content-data.js и JSON-файлов
// вместо того, чтобы держать их скопированными вручную в HTML.
// Сам текст (RU/EN) подставляется функцией setLanguage()
// из i18n.js — здесь только структура.

// ==========================================================
//  ЛЕГЕНДА (данные локальные, из content-data.js)
// ==========================================================
function renderLegend() {
    const wrapper = document.getElementById('legend-wrapper');
    if (!wrapper) return;

    legendData.forEach(item => {
        const block = document.createElement('div');
        block.className = 'legend-block';

        const textDiv = document.createElement('div');
        textDiv.className = 'legend-text';
        textDiv.id = 'legend' + item.id;
        textDiv.dataset.i18n = 'legend' + item.id;

        const imgWrap = document.createElement('div');
        imgWrap.className = 'legend-img';
        imgWrap.style.transform = `translateY(${item.offset}px)`;

        const img = document.createElement('img');
        img.src = `assets/img/legend${item.id}.webp`;
        img.alt = `Строфа ${item.id}`;
        img.className = 'clickable-img';

        imgWrap.appendChild(img);
        block.appendChild(textDiv);
        block.appendChild(imgWrap);
        wrapper.appendChild(block);
    });
}

// ==========================================================
//  СЦЕНЫ: загрузка из media.json
// ==========================================================
// Список скриншотов должен пополняться/сокращаться без правки
// кода, поэтому данные лежат в media.json и подгружаются через
// fetch — чтобы добавить/убрать сцену, достаточно отредактировать
// media.json (удобнее всего через admin.html) и положить файл
// картинки. Подписей у сцен больше нет — только изображения.

let mediaItems = [];

async function renderMedia() {
    const grid = document.getElementById('media-grid');
    if (!grid) return;

    try {
        const response = await fetch('media.json');
        mediaItems = await response.json();
    } catch (e) {
        console.log('Не удалось загрузить media.json:', e);
        return;
    }

    mediaItems.forEach(item => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.dataset.mediaId = item.id;

        const img = document.createElement('img');
        img.className = 'clickable-img';
        img.alt = `Сцена ${item.id}`;

        mediaItem.appendChild(img);
        grid.appendChild(mediaItem);
    });
}

// Вызывается из setLanguage() — подставляет картинку нужного языка.
function applyMediaLanguage(lang) {
    if (!mediaItems.length) return;

    document.querySelectorAll('.media-item').forEach(el => {
        const id = parseInt(el.dataset.mediaId, 10);
        const item = mediaItems.find(m => m.id === id);
        if (!item) return;

        const img = el.querySelector('img');
        img.src = lang === 'en' ? item.imgEn : item.imgRu;
    });
}

// ==========================================================
//  ТИЗЕРЫ НА ГЛАВНОЙ: загрузка из teasers.json
// ==========================================================
// Устроены так же, как сцены: добавление/удаление карточки —
// это правка teasers.json, без единой строчки кода.

let teaserItems = [];

async function renderTeasers() {
    const grid = document.getElementById('teasers-grid');
    if (!grid) return;

    try {
        const response = await fetch('teasers.json');
        teaserItems = await response.json();
    } catch (e) {
        console.log('Не удалось загрузить teasers.json:', e);
        return;
    }

    teaserItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'teaser-card';
        card.dataset.teaserId = item.id;

        const img = document.createElement('img');
        img.className = 'clickable-img';
        img.alt = `Тизер ${item.id}`;

        const caption = document.createElement('div');
        caption.className = 'teaser-caption';

        card.appendChild(img);
        card.appendChild(caption);
        grid.appendChild(card);
    });
}

// Вызывается из setLanguage() — подставляет картинку и подпись
// нужного языка. Если английской версии картинки ещё нет (imgEn пустой),
// показываем русскую — лучше, чем пустое место.
function applyTeaserLanguage(lang) {
    if (!teaserItems.length) return;

    document.querySelectorAll('.teaser-card').forEach(el => {
        const id = parseInt(el.dataset.teaserId, 10);
        const item = teaserItems.find(t => t.id === id);
        if (!item) return;

        const img = el.querySelector('img');
        img.src = (lang === 'en' && item.imgEn) ? item.imgEn : item.imgRu;

        const caption = lang === 'en' ? item.captionEn : item.captionRu;
        el.querySelector('.teaser-caption').textContent = caption || '';
    });
}

// ==========================================================
//  ДЕКОРАЦИИ: карточки персонажей и событий из characters.json
// ==========================================================
// Каждая карточка — ссылка на свою вики-страницу (wiki/<slug>.html).
// Добавить нового персонажа: объект в characters.json + файл
// страницы в папке wiki/.

let characterGroups = [];

async function renderCharacters() {
    const container = document.getElementById('characters-container');
    if (!container) return;

    try {
        const response = await fetch('characters.json');
        characterGroups = await response.json();
    } catch (e) {
        console.log('Не удалось загрузить characters.json:', e);
        return;
    }

    characterGroups.forEach(group => {
        const section = document.createElement('section');
        section.className = 'char-section';
        section.dataset.category = group.category;

        const heading = document.createElement('h3');
        heading.className = 'char-category-title';

        const grid = document.createElement('div');
        grid.className = 'actor-list';

        group.entries.forEach(entry => {
            // Карточка-загадка не ведёт никуда — обычный <div>,
            // а не ссылка, но тех же размеров/фона, что у остальных.
            const card = document.createElement(entry.mystery ? 'div' : 'a');
            card.className = entry.mystery ? 'actor-card mystery-card' : 'actor-card';
            if (!entry.mystery) {
                card.href = `wiki/${entry.slug}.html`;
            }
            card.dataset.slug = entry.slug;

            if (!entry.mystery) {
                const img = document.createElement('img');
                img.className = 'actor-portrait';
                img.src = entry.img;
                img.alt = entry.nameRu;
                // Если портрета ещё нет — прячем картинку, чтобы не
                // показывать «битую» иконку на месте будущего арта.
                img.onerror = function () { this.style.display = 'none'; };
                card.appendChild(img);

                const name = document.createElement('h4');
                name.className = 'actor-name';
                card.appendChild(name);
            }

            const teaser = document.createElement('p');
            teaser.className = 'actor-teaser';
            card.appendChild(teaser);

            grid.appendChild(card);
        });

        section.appendChild(heading);
        section.appendChild(grid);
        container.appendChild(section);
    });
}

// Вызывается из setLanguage() — подставляет имена, тизеры и
// заголовки категорий на нужном языке.
function applyCharacterLanguage(lang) {
    if (!characterGroups.length) return;
    const dict = lang === 'en' ? langEn : langRu;

    const titleKeys = { main: 'catMain', important: 'catImportant', events: 'catEvents' };

    document.querySelectorAll('.char-section').forEach(section => {
        const group = characterGroups.find(g => g.category === section.dataset.category);
        if (!group) return;

        const key = titleKeys[group.category];
        section.querySelector('.char-category-title').textContent =
            (key && dict[key]) || (lang === 'en' ? group.categoryEn : group.categoryRu);

        section.querySelectorAll('.actor-card').forEach(card => {
            const entry = group.entries.find(e => e.slug === card.dataset.slug);
            if (!entry) return;

            const nameEl = card.querySelector('.actor-name');
            if (nameEl) {
                nameEl.textContent = lang === 'en' ? entry.nameEn : entry.nameRu;
            }
            card.querySelector('.actor-teaser').textContent =
                lang === 'en' ? entry.teaserEn : entry.teaserRu;
        });
    });
}
