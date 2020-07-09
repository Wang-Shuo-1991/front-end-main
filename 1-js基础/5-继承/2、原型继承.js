// 原型继承 【继承者的原型等于父类实例】
// 私有属性和共有属性

function Fn () {
    this.x = 100
}

Fn.prototype = {
    getX () {
        console.log(this.x)
    }
}

function Bn () {
    this.y = 200;
}

Bn.prototype = new Fn();



new Bn().getX();
console.log('x',new Bn().x)
console.log('bn', new Bn())