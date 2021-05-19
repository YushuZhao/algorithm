/**
 * 快速排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 * 
 * 方法二
 */

const quickSort = (arr) => {
    return _quickSort(arr, 0, arr.length - 1);
}

const _quickSort = (arr, left, right) => {
    if (left >= right) { return arr };
    let pivotIndex = partition(arr, left, right);
    _quickSort(arr, left, pivotIndex - 1);
    _quickSort(arr, pivotIndex + 1, right);
}

const partition = (arr, left, right) => {
    let pivot = arr[left];
    let mark = left;

    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < pivot) {
            mark++;
            let pivot = arr[mark];
            arr[mark] = arr[i];
            arr[i] = pivot;
        }
    }
    arr[left] = arr[mark];
    arr[mark] = pivot;
    return mark
}

const arr = [5, 1, 4, 2, 8];
console.log(arr)
quickSort(arr)
console.log(arr)