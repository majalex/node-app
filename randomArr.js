const getRandomInt = require('./randomInt');

function getRandomIntArr(min, max, times) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr = [];
    for (let i = 1; i <= times; i++){
        arr.push(getRandomInt(min, max))
    }

    return arr  
}

module.exports = getRandomIntArr;