//  中间类继承
// __proto__

function F () {
    this.x = 1000
}

F.prototype.getX = function () {
    console.log(this.x)
}

function Y () {
    F.call(this)
}

Y.__proto__ = F.prototype;

