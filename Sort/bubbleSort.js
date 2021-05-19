/**
 * 冒泡排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 */

const bubbleSort = arr => {
    if (arr instanceof Array && arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr
    }
}

const arr = [5, 1, 4, 2, 8];
console.log(arr)
console.log(bubbleSort(arr))