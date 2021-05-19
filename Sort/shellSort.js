/**
 * 希尔排序
 *
 * 输入: arr = [5,1,4,2,8]
 * 输出: arr = [1,2,4,5,8]
 */

//  const insertSort = arr => {
//     for (let i = 1; i < arr.length; i++) {
//         let insertValue = arr[i];
//         let j = i - 1;
//         for (; j >= 0 && arr[j] > insertValue; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = insertValue;
//     }
// }

const shellSort = arr => {
    let gap = Math.floor(arr.length / 2); // 使用希尔增量的方式，即每次折半
    // 注意i从gap开始，因为以arr[0]为基准数时,j=i-1
    while (gap >= 1) {
        for (let i = gap; i < arr.length; i++) {
            let insertValue = arr[i];
            let j = i - gap;
            for (; j >= 0 && arr[j] > insertValue; j = j - gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = insertValue;
        }
        gap = Math.floor(gap / 2);
    }
}

const arr = [5, 8, 6, 3, 9, 2, 1, 7];
console.log(arr)
shellSort(arr)
console.log(arr)