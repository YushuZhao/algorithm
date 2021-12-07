/**
 * 手动实现一个 repeat 方法
 * function repeat(func, times, wait) {
 *   // TODO
 * }

 * const repeatFunc = repeat(alert, 4, 3000);
 * // 调用这个 repeatFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
 */

// 方法一 setInterval
// function repeat(func, times, wait) {
//   if (typeof func !== "function") return;
//   if (times <= 0) return;
//   return function (value) {
//     let count = times;
//     let interval = setInterval(() => {
//       func(value);
//       count--;
//       count === 0 && clearInterval(interval);
//     }, wait);
//   };
// }

// 方法二 setTimeout
function repeat(func, times, wait) {
  if (typeof func !== "function") return;
  return function (value) {
    let count = times;
    let timer = setTimeout(() => {
      for (let i = count; i > 0; i--) {
        func(value);
        count--;
      }
      return clearTimeout(timer);
    }, wait);
  };
}

const repeatAlert = repeat(alert, 4, 3000);

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");

/**
 * 网上方法 todo
 * function repeat (func, times, wait) {
        return function(...args){
            let i = 0;
            let _args = [...args]
        let handle = setInterval(() => {
            i += 1;
            if(i > times){
                clearInterval(handle);
                return;
            }
            func.apply(null, _args);
        },wait);
    }
}
 */
