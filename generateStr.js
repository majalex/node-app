function generateStr (num) {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789';
            
    for (let i = 1; i <= num; i++) {
        var char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char)
    }
    return pass;
}



module.exports = generateStr;