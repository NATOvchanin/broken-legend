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

function renderMedia() {
    const grid = document.getElementById('media-grid');
    if (!grid) return;

    mediaData.forEach(item => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';

        const img = document.createElement('img');
        img.src = `assets/img/photo${item.id}.webp`;
        img.alt = `Скриншот ${item.id}`;
        img.className = 'clickable-img';
        img.id = 'mediaImg' + item.id;
        img.dataset.i18nSrc = 'mediaImg' + item.id;

        const desc = document.createElement('div');
        desc.className = 'desc';
        desc.id = 'mediaDesc' + item.id;
        desc.dataset.i18n = 'mediaDesc' + item.id;

        mediaItem.appendChild(img);
        mediaItem.appendChild(desc);
        grid.appendChild(mediaItem);
    });
}
