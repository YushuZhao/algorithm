/**
 * @param {number[]} A
 * @return {number}
 */
// const minIncrementForUnique = function (A) {
//     A.sort((a, b) => a - b);
//     let num = 0;
//     for (let i = 1; i < A.length; i++) {
//         if (A[i] <= A[i - 1]) {
//             let dif = A[i - 1] + 1 - A[i];
//             num += dif;
//             A[i] += dif;
//         }
//     }
//     console.log(A)
//     console.log(num)
//     return num
// };

var minIncrementForUnique = function (A) {
    let count = 0;
    let map = new Map();
    for (let num of A) {
        while (map.has(num)) {
            count++;
            num++;
        }
        map.set(num, true);
    }
    console.log(count)
    return count
}

/**
 * 此解不通 [2,2,2]
 */
// const minIncrementForUnique = function (A) {
//     let newArr = [];
//     let num = 1;
//     let pointer;
//     for (var i = 0; i < A.length; i++) {
//         let o = A[i];
//         if (!newArr.includes(o)) {
//             newArr.push(A[i]);
//             pointer = i;
//         } else {
//             break;
//         }
//     }
//     for (var j = pointer + 1; j < A.length; j++) {
//         if (newArr.includes(A[j])) {
//             let o = A[j] + 1;
//             while (newArr.includes(o)) {
//                 o += 1;
//                 num += 1;
//             }
//             newArr.push(o)
//         } else {
//             num += 1;
//             newArr.push(A[j]);
//         }
//     }
//     console.log(newArr)
//     console.log(num)
//     return num
// };