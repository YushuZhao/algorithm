/**
 * 选择排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 */

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[minIndex] > arr[j] ? j : minIndex;
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
}

const arr = [5, 1, 4, 2, 8];
console.log(arr)
selectionSort(arr);
console.log(arr)