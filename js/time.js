const config = {
    seconds: true
};

function formatDigit(digit = 0) {
    if (digit < 10) return '0' + digit;
    return '' + digit;
}

function addColon() {
    const colon = document.createElement('span');
    colon.classList = 'special-char';
    colon.textContent = ':';
    return colon;
}

export function addSecondsToggle(element) {
    element.addEventListener('click', e => {
        config.seconds = !config.seconds;
    });
    element.addEventListener('contextmenu', e => {
        e.preventDefault();
        config.seconds = !config.seconds;
    });
}

export default function time(date = new Date()) {
    const span = document.createElement('span');

    // hours
    span.append(formatDigit(date.getHours()));

    // minutes
    span.append(addColon());
    span.append(formatDigit(date.getMinutes()));

    // seconds
    if (config.seconds) {
        span.append(addColon());
        span.append(formatDigit(date.getSeconds()));
    }

    return span;
}