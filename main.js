import day from './js/day.js';
import time, { addSecondsToggle } from './js/time.js';
import getDate from './js/date.js';
import formats from './js/formats.js';
import './js/theme.js';
import i18n, { languages } from './js/i18n.js';

const dayEl = document.querySelector('.day');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

for (let el of [dayEl, timeEl, dateEl]) {
    el.addEventListener('click', e => {
        e.stopPropagation();
    });
    el.addEventListener('contextmenu', e => {
        e.stopPropagation();
    });
}

let languageIndex = 0;
let formatIndex = 0;
const current = {
    day: null,
    time: null,
    date: null
};

dayEl.addEventListener('click', e => {
    languageIndex++;
    if (languageIndex === languages.length) {
        languageIndex = 0;
    }
});
dayEl.addEventListener('contextmenu', e => {
    e.preventDefault();
    languageIndex--;
    if (languageIndex < 0) {
        languageIndex = languages.length - 1;
    }
});

dateEl.addEventListener('click', e => {
    formatIndex++;
    if (formatIndex === formats.length) {
        formatIndex = 0;
    }
});
dateEl.addEventListener('contextmenu', e => {
    e.preventDefault();
    formatIndex--;
    if (formatIndex < 0) {
        formatIndex = formats.length - 1;
    }
});

addSecondsToggle(timeEl);

function updateDay(date, days) {
    let updated = day(date, days);
    if (current.day != null && current.day == updated) {
        return;
    }

    current.day = day(date, days);
    dayEl.innerHTML = '';
    dayEl.append(current.day);
}

function updateTime(date) {
    let updated = time(date);
    if (current.time?.innerHTML == updated.innerHTML) {
        return;
    }

    current.time = time(date);
    timeEl.innerHTML = '';
    timeEl.append(current.time);
}

function updateDate(date, format, months) {
    let updated = getDate(date, format, months);
    if (current.day != null && current.date == updated) {
        return;
    }

    current.date = getDate(date, format, months);
    dateEl.innerHTML = '';
    dateEl.append(current.date);
}

function update() {
    const date = new Date();
    const { days, months } = i18n[languages[languageIndex]];

    updateDay(date, days);
    updateTime(date);
    updateDate(date, formats[formatIndex], months);
}

function loop() {
    update();
    requestAnimationFrame(loop);
}

loop();