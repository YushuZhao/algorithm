/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    const n = matrix.length;
    if (n == 0) return []
    const m = matrix[0].length;
    let x = 0;
    let y = 0;
    let borderRight = m - 1;
    let boderBottom = n - 1;
    let borderLeft = 0;
    let borderTop = 0;
    let arr = [];
    let turn = borderRight == 0 ? 'd' : 'r';

    for (let i = 0; i < m * n; i++) {
        arr.push(matrix[x][y]);
        if (turn == 'r') {
            y++;
            if (y == borderRight) {
                borderTop++;
                turn = 'd';
            }
        } else if (turn == 'd') {
            x++;
            if (x == boderBottom) {
                borderRight--;
                turn = 'l';
            }
        } else if (turn == 'l') {
            y--;
            if (y == borderLeft) {
                boderBottom--;
                turn = 'u';
            }
        } else if (turn == 'u') {
            x--;
            if (x == borderTop) {
                borderLeft++;
                turn = 'r';
            }
        }
    }
    console.log(arr)
    return arr
};