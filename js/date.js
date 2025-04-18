function dateFormat(format, months, day, month, year) {
    const values = format.string.split(' ');
    let result = '';

    for (let value of values) {
        result += ' ';
        switch (value) {
            case 'd':
                result += day + format.dayExtension(day);
                continue;
            case 'mm':
                result += months[month];
                continue;
            case 'm':
                result += months[month].substring(0, 3);
                continue;
            case 'y':
                result += year;
                continue;
        }
    }

    return result.trim();
}

export default function getDate(date = new Date(), format, months) {
    const day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    return dateFormat(format, months, day, month, year);
}