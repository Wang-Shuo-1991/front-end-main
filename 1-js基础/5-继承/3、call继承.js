// call继承 继承者把父类私有属性拷贝一份作为自己的构造函数
// 私有属性

function F () {
    this.num = 1000;
}

F.prototype = {
    getNum () {
        console.log(this.num)
    }
}

function G () {
    F.call(this);
}

console.log(new G().num)
console.log(new G().getNum()) // -> .getNum is not a function