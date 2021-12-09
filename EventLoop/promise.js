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

// let p1 = Promise.resolve(1);
// let p2 = Promise.resolve(2);
// let p3 = Promise.resolve(3);

// promiseAll([p1, p2, p3]).then(
//   (res) => {
//     console.log("res: ", res);
//   },
//   (err) => {
//     console.log("err: ", err);
//   }
// );

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
// 1 'err'

/**
 * 实现调用promise.all时,有某一请求reject时依旧可以正常返回数组
 *
 * 在promise.all队列中，使用map过滤每一个promise任务，其中任意一个报错后，return一个返回值，确保promise能正常执行走到.then中.
 *
 * 关键点: Promise.prototype.catch方法返回的也是一个promise
 *
 */

// const p1 = new Promise((_, reject) => reject('p1 error'))
//   .catch((err) => null)
//   .then((res) => console.log(res));

// 写法一

// const p1 = new Promise((resolve, reject) => {
//   resolve("p1");
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("p2");
// });
// const p3 = new Promise((resolve, reject) => {
//   reject("p3 error");
// });
// Promise.all([p1, p2, p3].map((p) => p.catch((err) => null)))
//   .then((values) => {
//     console.log("result:", values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 写法二
// const p1 = Promise.resolve("p1").catch((e) => null);
// const p2 = Promise.reject("p2").catch((e) => null);
// const p3 = Promise.reject("p3").catch((e) => null);
// Promise.all([p1, p2, p3])
//   .then((values) => {
//     console.log("result:", values);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

/**
 * Promise.allSettled()
 *
 * ES2020 引入了Promise.allSettled()方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做'Settled'，包含了'fulfilled'和'rejected'两种情况.
 */
// const p1 = new Promise((resolve, reject) => {
//   resolve('p1');
// });
// const p2 = new Promise((resolve, reject) => {
//   reject('p2');
// });
// const p3 = new Promise((resolve, reject) => {
//   resolve('p3');
// });
// Promise.allSettled([p1, p2, p3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
