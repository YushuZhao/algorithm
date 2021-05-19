Array.prototype.myMap = function (func, currentElement) {
    if (typeof func !== "function") {
        throw new TypeError(`${func} is not a function`);
    }

    let arr = this;
    let result = new Array();

    for (let i = 0; i < arr.length; i++) {
        let tmp = func.call(currentElement, arr[i], i, arr);
        result.push(tmp);
    }
    return result;
}


const arr = [1, 2, 3];

let result = arr.myMap(
    (item, index, arr) => {
        return item + 3
    }

);

console.log(result)

// func 
// const myMap = (arr, fn) => {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(fn(arr[i], i, arr));
//     }

//     return result
// }

// const arr = [1, 2, 3];

// function add(item, index, arr) {
//     return item + 3
// }

// console.log(myMap(arr, add))



