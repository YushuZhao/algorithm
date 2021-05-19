/**
 * 插入排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 */

const insertSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > insertValue) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

// 优化
const insertSort2 = arr => {
    for (let i = 1; i < arr.length; i++) {
        let insertValue = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > insertValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = insertValue;
    }
}

const arr = [5, 1, 4, 2, 8, 7, 9, 6];
console.log(arr)
insertSort2(arr);
console.log(arr)