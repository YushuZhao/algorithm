/**
 * 归并排序
 *
 * 输入: arr = [5, 8, 6, 3, 9, 2, 1, 7]
 * 输出: arr = [1, 2, 3, 5, 6, 7, 8, 9 ]
 */

const mergeSort = (arr, start, end) => {
    if (start < end) {
        // 折半成两个小集合,分别进行递归
        let mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        // 把两个有序小集合,归并成一个大集合
        merge(arr, start, mid, end);
    }
}

const merge = (arr, start, mid, end) => {
    // 开辟额外大集合,设置指针
    let tmpArr = new Array(end - start + 1);
    let p1 = start, p2 = mid + 1, p = 0;

    // 比较两个小集合的元素,依次放入大集合
    while (p1 <= mid && p2 <= end) {
        if (arr[p1] <= arr[p2]) {
            tmpArr[p++] = arr[p1++];
        } else {
            tmpArr[p++] = arr[p2++];
        }
    }
    // 左侧小集合还有剩余,依次放入大集合尾部
    while (p1 <= mid) {
        tmpArr[p++] = arr[p1++];
    }
    // 右侧小集合还有剩余,依次放入大集合尾部
    while (p2 <= end) {
        tmpArr[p++] = arr[p2++];
    }
    // 把大集合的元素复制回原数组
    for (let i = 0; i < tmpArr.length; i++) {
        arr[i + start] = tmpArr[i]
    }
}

let arr = [5, 8, 6, 3, 9, 2, 1, 7];
mergeSort(arr, 0, arr.length - 1)
console.log(arr)