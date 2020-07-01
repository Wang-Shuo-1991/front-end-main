// 手写new 需要知道new一个构造函数，都发生了什么事情。
// 第一，新建一个对象，把这个对象赋值给this
// var obj = {}; this = obj;
// 第二，执行构造函数体，给this也就是这个新建对象添加属性
// this = obj; this.name = name; this.age = age; ...  
// 第三返回这个对象 也就是 this
// return this -> reutrn {name: '', age: xx}

function User (name) {
    this.name = name
}

User.prototype.getName = function () {
    console.log(this.name)
}

function MyNew (func, ...args) {
    var obj = Object.create(func.prototype);
    func.call(obj, ...args);
    return obj;
}

console.log(MyNew(User, 'wang'))
MyNew(User, 'wang').getName()


// 实际上 new 生成了一个以构造函数原型为原型的对象，并把构造函数的this指向新建对象并执行。