function A() {
  this.fn = function () {
    console.log('A')
  }
}
function B() {
  // A.call(this)
}

// B.prototype__proto__ === A.prototype;
B.prototype = new A();
const b = new B();
b.fn()

console.log(B.prototype.__proto__ == A.prototype)