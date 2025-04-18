const themes = [];
let currentTheme = themes.length - 1;

/* automatically get all theme names from themes.css */
const data = await fetch('../themes.css');
const uint8 = await data.body.getReader().read();
const css = (new TextDecoder()).decode(uint8.value);

const re = /(?:\.theme-)([a-z0-9-_/]+)/ig;
let match = true;
let max = 50;

while (match && --max) {
    match = re.exec(css);
    if (match) {
        themes.push(match[1])
    }
}

function nextTheme() {
    document.body.classList.remove(`theme-${themes[currentTheme]}`);
    currentTheme++;
    if (currentTheme >= themes.length)  {
        currentTheme = 0;
    }
    document.body.classList.add(`theme-${themes[currentTheme]}`);
}

function previousTheme() {
    document.body.classList.remove(`theme-${themes[currentTheme]}`);
    currentTheme--;
    if (currentTheme < 0) {
        currentTheme = themes.length - 1;
    }
    document.body.classList.add(`theme-${themes[currentTheme]}`);
}

document.body.addEventListener('keypress', e => {
    e.preventDefault();

    if (e.key === ' ') {
        nextTheme();
    }
});

document.body.addEventListener('click', e => {
    nextTheme();
});
document.body.addEventListener('contextmenu', e => {
    e.preventDefault();
    previousTheme();
});

nextTheme();