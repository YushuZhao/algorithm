/**
 * 704 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target,
 * 写一个函数搜索 nums 中的 target,如果目标值存在返回下标,否则返回 -1
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2); // 防止整型溢出错误
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

// 注: 二分查找算法最需要注意的就是 边界定义问题, 遵循[循环不变量原则(循环不重不漏)]

var search = function (nums, target) {
    let left = 0;
    let right = nums.length; // 左闭右开

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid; // 保持左闭右开
        }
    }
    return -1;
};


/**
 * 35 搜索插入位置
 * 给定一个排序数组和一个目标值,在数组中找到目标值,并返回其索引。如果目标值不存在于数组中,返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return left
};


/**
 * 153 寻找旋转排序数组中的最小值
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 * 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。
 * 请找出其中最小的元素。
 *
 * 输入：nums = [3,4,5,1,2]
 * 输出：1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        // if(nums[left] < nums[right]) return nums[left]
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[right] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left]
};