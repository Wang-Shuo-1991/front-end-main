// 混合模式指的是 -> call继承和原型继承混合

function F () {
    this.x = 210;
}

F.prototype.getX = function () {
    console.log(this.x)
}

function Y () {
    F.call(this)
}

Y.prototype = new F();

let y = new Y();

console.log('get',y.getX());
console.log('x', y.x);