/**
 * 归并排序
 *
 * 输入: arr = [5, 8, 6, 3, 9, 2, 1, 7]
 * 输出: arr = [1, 2, 3, 5, 6, 7, 8, 9 ]
 */

const mergeSort = (arr) => {
    let len = arr.length;
    if (len < 2) {
        return arr
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result
}

let arr = [5, 8, 6, 3, 9, 2, 1, 7];
let arr2 = mergeSort(arr);
console.log(arr2)

