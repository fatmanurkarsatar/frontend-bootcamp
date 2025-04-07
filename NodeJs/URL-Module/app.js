const url = require('url');

const address = 'http://nurkarsatar.com/kurslar?year=2024&month=august';

let result = url.parse(address, true);

console.log(result);
console.log(result.path);
console.log(result.query.year);
console.log(result.query.month);