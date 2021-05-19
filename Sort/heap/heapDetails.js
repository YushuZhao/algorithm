/**
 * 二叉堆 - 小顶堆 
 */

/**
 * 上浮调整
 * arr 待调整的堆
 * 
 *        1
 *     3     2
 *   6   5  7  8
 * 9 10 0
 */

// 上浮
const upAdjust = arr => {
    let childIndex = arr.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let temp = arr[childIndex];
    while (childIndex > 0 && temp < arr[parentIndex]) { // 小顶堆 子节点的值小于父节点，上浮
        // 无需真正交换，单向赋值即可
        arr[childIndex] = arr[parentIndex];
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2); // 继续向上找父节点
    }
    arr[childIndex] = temp;
}

// 下沉
const downAdjust = (arr, parentIndex, length) => {
    let temp = arr[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while (childIndex < length) {
        // 如果有右节点,且右节点<左节点，则定位到右节点
        if (childIndex + 1 < length && arr[childIndex + 1] < arr[childIndex]) {
            childIndex++;
        }
        // 如果父节点小于任何一个子节点的值，直接跳出
        if (temp <= arr[childIndex]) break;
        // 无需真正交换，单向赋值即可
        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1; // 继续向上找父节点
    }
    arr[parentIndex] = temp;
}

const buildHeap = arr => {
    // 从最后一个非叶子节点开始,依次下沉调整
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
        downAdjust(arr, i, arr.length);
    }
}


// const arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
// console.log(arr)
// upAdjust(arr)
// console.log(arr);
const arr2 = [7, 1, 3, 10, 5, 2, 8, 9, 6];
console.log(arr2)
buildHeap(arr2)
console.log(arr2)