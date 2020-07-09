// 寄生组合模式
// 解决了混合继承的重复继承的问题

function F () {
    this.x = 100;
}

F.prototype.getX = function () {
    console.log(this.x)
}

function S () {
    F.call(this)
}

S.prototype = Object.create(F.prototype)

console.log(new S().x)
console.log(new S().getX())
console.log('S', S)

