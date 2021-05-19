const checkType = type => {
    return obj => {
        const checktype = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        return checktype === type
    }
}

const isArray = obj => checkType('array')(obj)
const isObject = obj => checkType('object')(obj)


console.log(isArray({ 1: '1', 2: '2' }))
console.log(isArray(new Array()))
