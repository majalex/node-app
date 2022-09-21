const getRandomInt = require('./randomInt');
const generateStr = require('./generateStr');
const getRandomIntArr = require('./RandomArr');

console.log('Losowa liczba: ' + getRandomInt(15, 30));
console.log('Losowy ciąg znaków: ' + generateStr(6));
console.log('Tablica losowych znaków: ' + getRandomIntArr(1, 9, 7));

