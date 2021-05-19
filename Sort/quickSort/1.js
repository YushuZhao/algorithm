/**
 * 快速排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 * 
 * 方法一
 */

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr.splice(midIndex, 1)[0];

    let arrLeft = [];
    let arrRight = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item < midValue) {
            arrLeft.push(item);
        } else {
            arrRight.push(item);
        }
    }
    return quickSort(arrLeft).concat(midValue, quickSort(arrRight));
}

const arr = [5, 2, 4, 2, 8];
console.log(arr)
console.log(quickSort(arr))