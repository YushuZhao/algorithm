/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let iArr = [];
    let jArr = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                iArr.push(i);
                jArr.push(j);
            }
        }
    }
    for (let y = 0; y < matrix[0].length; y++) {
        iArr.map((o) => {
            matrix[o][y] = 0;
        })
    }
    for (let x = 0; x < matrix.length; x++) {
        jArr.map((o) => {
            matrix[x][o] = 0;
        })
    }
    console.log(matrix)
    return matrix
};

// 此届只能实现 只有一个0的情况 
// 下面进行了改进
// var setZeroes = function (matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 0) {
//                 for (let y = 0; y < matrix[0].length; y++) {
//                     matrix[i][y] = -1;
//                 }
//                 for (let x = 0; x < matrix.length; x++) {
//                     matrix[x][j] = -1;
//                 }
//                 console.log(matrix)
//                 return matrix
//             }
//         }
//     }
// };

// 利用了js的特性，-0和0的不相等
// var setZeroes = function (matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (Object.is(matrix[i][j], 0)) {
//                 for (let y = 0; y < matrix[0].length; y++) {
//                     matrix[i][y] = Object.is(matrix[i][y], 0) ? 0 : -0;
//                 }
//                 for (let x = 0; x < matrix.length; x++) {
//                     matrix[x][j] = Object.is(matrix[x][j], 0) ? 0 : -0;
//                 }
//                 // return matrix
//             }
//         }
//     }
//     console.log(matrix)
//     return matrix
// };