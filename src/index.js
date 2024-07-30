module.exports = function reverse (n) {
    let str = n.toString();
    let strReverse = '';
    for (i = str.length- 1; i >= 0; i--)
        if (!(str[i] == '0') | !(str[i] == '-'))
        strReverse = strReverse + str[i];
    return parseInt(strReverse);
}