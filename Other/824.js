/**
 * @param {string} S
 * @return {string}
 */
// let toGoatLatin = function (S) {
//     let arr = S.split(' ').map((item, index) => {
//         if (item.indexOf('a') == 0 || item.indexOf('e') == 0 || item.indexOf('i') == 0 || item.indexOf('o') == 0 || item.indexOf('u') == 0 ||
//             item.indexOf('A') == 0 || item.indexOf('E') == 0 || item.indexOf('I') == 0 || item.indexOf('O') == 0 || item.indexOf('U') == 0) {
//             item = item + 'ma';
//         } else {
//             let tmp = item;
//             let firstWord = tmp.substring(0, 1);
//             item = item.substring(1, item.length) + firstWord + 'ma';
//         }
//         let strArr = [];
//         for (let i = 0; i <= index; i++) {
//             strArr.push('a');
//         }
//         let addStr = strArr.join('');
//         return item + addStr
//     })
//     let str = arr.join(' ');
//     console.log(str)
//     return str
// };

// RegExp + concat() + repeat()
// var toGoatLatin = function (S) {
//     var reg = new RegExp('^[a,e,i,o,u,A,E,I,O,U]', '')
//     var arr = S.split(' ')
//     for (var i in arr) {
//         if (reg.test(arr[i])) {
//             arr[i] = arr[i].concat('ma').concat('a'.repeat(parseInt(i) + 1))
//         } else {
//             arr[i] = arr[i].substring(1).concat(arr[i].substring(0, 1)).concat('ma').concat('a'.repeat(parseInt(i) + 1))
//         }
//     }
//     console.log(arr.join(' '))
//     return arr.join(' ')
// };


// includes()
var toGoatLatin = function (S) {
    var arr = S.split(' ')
    for (var i in arr) {
        if (['a', 'e', 'i', 'o', 'u'].includes(arr[i].substring(0, 1).toLowerCase())) {
            arr[i] = arr[i].concat('ma').concat('a'.repeat(parseInt(i) + 1))
        } else {
            arr[i] = arr[i].substring(1).concat(arr[i].substring(0, 1)).concat('ma').concat('a'.repeat(parseInt(i) + 1))
        }
    }
    console.log(arr.join(' '))
    return arr.join(' ')
};