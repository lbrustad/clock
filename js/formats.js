// d  = day in month
// m  = month, first 3 letters
// mm = month
// y  = year
const formats = [{
    string: 'mm d y',
    dayExtension: day => ','
}, {
    string: 'm d y',
    dayExtension: day => ','
}, {
    string: 'd mm y',
    dayExtension: day => '.'
}, {
    string: 'd m y',
    dayExtension: day => '.'
}];

export default formats;