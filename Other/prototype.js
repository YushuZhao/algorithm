function B() {
  this.fn = function () {
    console.log('B')
  }
}
function A() {
  // B.call(this)
}

// A.prototype__proto__ === B.prototype;
A.prototype = new B();
const a = new A();
a.fn()

console.log(A.prototype.__proto__ == B.prototype)