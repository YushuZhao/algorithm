/**
 * @param {number[]} nums
 * @return {number}
 */

// ES6
// let removeDuplicates = function (nums) {
//     let arr = Array.from(new Set(nums));
//     console.log(arr)
//     return arr.length
// };


// 空间复杂度为O(1)
// let removeDuplicates = function (nums) {
//     let count = 0;
//     let n = nums.length;
//     for (let i = 1; i < n; i++) {
//         if (nums[i] != nums[i - 1]) {
//             nums[i - count] = nums[i];
//         } else {
//             count++;
//         }
//     }
//     console.log(nums.slice(0, n - count))
//     return n - count;
// };

// 空间复杂度为O(1) 双指针
let removeDuplicates = function (nums) {
    let pointer = 0;
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            pointer++;
            nums[pointer] = nums[i];
        }
    }
    console.log(nums.slice(0, pointer + 1))
    return pointer + 1;
};