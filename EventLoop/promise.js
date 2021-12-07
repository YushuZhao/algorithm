/**
 * 手动实现一个 promise.all 方法
 */

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("promises must be an array");
    }
    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise.then(
        (res) => {
          result[index] = res;
          count++;
          count === promises.length && resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(
  (res) => {
    console.log(res, "res");
  },
  (err) => {
    console.log(err, "err");
  }
);

// [1, 2, 3] res

// let p1 = Promise.resolve(1);
// let p2 = Promise.resolve(2);
// let p3 = Promise.resolve(3);

// promiseAll([p1, p2, p3]).then(
//   (res) => {
//     console.log(res, "res");
//   },
//   (err) => {
//     console.log(err, "err");
//   }
// );
// 1 "err"
