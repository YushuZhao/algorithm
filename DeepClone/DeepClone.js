function checkType(obj) {
    const type = Object.prototype.toString.call(obj);
    return type.slice(8, -1);
}

function deepClone(obj, hash = new WeakMap()){
    if( obj == null ) return obj;
    if( obj instanceof Date ) return new Date(obj);
    if( obj instanceof RegExp ) return new RegExp(obj);
    if( obj === null ||typeof obj !== 'object') return obj;

    // if(checkType(obj) === 'RegExp') {
    //   // regExp.source 正则对象的源模式文本;
    //   // regExp.flags 正则表达式对象的标志字符串;
    //   // regExp.lastIndex 下次匹配开始的字符串索引位置
    //   let temp =  new RegExp(obj.source, obj.flags);
    //   temp.lastIndex = obj.lastIndex;
    //   return temp;
    // }
    // if(checkType(obj) === 'Date') {
    //     return new Date(obj);
    // }
    // // 非复杂类型(null、undefined、string、number、symbol、boolean、function)
    // if(obj === null || typeof obj !== 'object') {
    //     return obj;
    // }
    // 还可以扩展其他类型...
    // 与后面hash.set()防止循环引用
    if(hash.has(obj)) {
        return hash.get(obj);
    }
  
    let newObj = new obj.constructor(); // 获取 obj 的类型, 并且可以根据类型来新建相应的拷贝对象
    hash.set(obj, newObj);

    // Object.keys(obj)类型于 for in 和 obj.hasOwnProperty
    for(let key in obj){
        if(obj.hasOwnProperty(key)){ // 过滤掉对象元属性上面的属相
            newObj[key] = deepClone(obj[key], hash)
        }
    }

    // 是否应该拷贝自身属性（可枚举的和不可枚举的以及symbol）
    // Reflect.ownKeys(obj).forEach(function(key) {
    //     if(typeof obj[key] === 'object' && obj[key] !== null) {
    //         newObj[key] = deepClone(obj[key], hash);
    //     }else{
    //         // 直接赋值
    //         // newObj[key] = obj[key];
    //         // 是否应该保留属性描述符
    //         Object.defineProperty(newObj, key, Object.getOwnPropertyDescriptor(obj, key));
    //     }
    // });
    return newObj;
}

// const a = {name: "a"};
// const b = {name: "b"};
// a.b = b;
// b.a = a; // 相互引用
// console.log(a)
// var cloneData = deepClone(a); 
// console.log(cloneData)
