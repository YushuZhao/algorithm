/**
 * 堆排序 - 大顶堆
 *
 * 输入: arr = [7, 1, 3, 10, 5, 2, 8, 9, 6]
 * 输出: arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]
 */

// 下沉
const downAdjust = (arr, parentIndex, length) => {
    let temp = arr[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while (childIndex < length) {
        // 如果有右节点,且右节点>左节点，则定位到右节点
        if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++;
        }
        // 如果父节点大于任何一个子节点的值，直接跳出
        if (temp >= arr[childIndex]) break;
        // 无需真正交换，单向赋值即可
        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1;
    }
    arr[parentIndex] = temp;
}

const heapSort = arr => {
    // 把无序数组构建成二叉堆
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        downAdjust(arr, i, arr.length);
    }

    // 循环删除堆顶元素,移到集合尾部，调节堆产生新的堆顶
    for (let i = arr.length - 1; i > 0; i--) {
        // 最后一个元素和第一个元素进行交换
        [arr[i], arr[0]] = [arr[0], arr[i]];
        // 下沉调整最大堆
        downAdjust(arr, 0, i);
    }
}

const arr = [7, 1, 3, 10, 5, 2, 8, 9, 6];
heapSort(arr)
console.log(arr)