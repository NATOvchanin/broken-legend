// ==========================================================
//  ГЕНЕРАЦИЯ БЛОКОВ "ЛЕГЕНДА" И "МАТЕРИАЛЫ" ИЗ ДАННЫХ
// ==========================================================
// Строит DOM-блоки на основе content-data.js вместо того,
// чтобы держать их скопированными вручную в index.html.
// Сам текст (RU/EN) подставляется отдельно, функцией
// setLanguage() из i18n.js — здесь только структура и id/src
// картинок для исходного (русского) варианта, чтобы страница
// не была пустой до первого вызова setLanguage().

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
//  МАТЕРИАЛЫ: загрузка из media.json
// ==========================================================
// В отличие от легенды (фиксированный, заранее известный набор
// строф), список скриншотов должен пополняться/сокращаться без
// правки кода. Поэтому сами данные (картинки + RU/EN описания)
// лежат не в content-data.js, а в media.json и подгружаются
// через fetch — чтобы добавить/убрать скриншот, достаточно
// отредактировать media.json и положить/удалить файл картинки,
// ничего в HTML/JS трогать не нужно.

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
        img.alt = `Скриншот ${item.id}`;

        const desc = document.createElement('div');
        desc.className = 'desc';

        mediaItem.appendChild(img);
        mediaItem.appendChild(desc);
        grid.appendChild(mediaItem);
    });
}

// Вызывается из setLanguage() в i18n.js — подставляет в уже
// построенные .media-item нужный язык (картинку + описание).
function applyMediaLanguage(lang) {
    if (!mediaItems.length) return;

    document.querySelectorAll('.media-item').forEach(el => {
        const id = parseInt(el.dataset.mediaId, 10);
        const item = mediaItems.find(m => m.id === id);
        if (!item) return;

        const img = el.querySelector('img');
        const desc = el.querySelector('.desc');

        img.src = lang === 'en' ? item.imgEn : item.imgRu;
        desc.textContent = lang === 'en' ? item.descEn : item.descRu;
    });
}
