/**
 * Array.from()
 *
 * 序列生成器(指定范围)
 * 
 * 例:
 * range(0, 4, 1);   // [0, 1, 2, 3, 4]
 * range(1, 10, 2);  // [1, 3, 5, 7, 9]
 *
 */

// Array.from({length: 5}, (v, i) => i);  // [0, 1, 2, 3, 4]

const range = (start, end, step) => Array.from({ length: (end - start) / step + 1 }, (_, i) => start + (i * step));

console.log(range(0, 4, 1));
console.log(range(1, 10, 2));


/**
 * 实现Array中的filter方法
 */
