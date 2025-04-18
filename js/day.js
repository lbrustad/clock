export default function day(date, days = []) {
    let day = date.getDay() - 1;
    if (day < 0) day = 6;
    return days[day] ?? '(Missing day)';
}