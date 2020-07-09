// 冒充对象继承 
// 暂存对象继承

// 继承私有属性

function F () {
    this.x = 10000;
}

F.prototype.getX = function () {
    console.log(this.x)
}

function Y () {
    var temp = new F();
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            const element = temp[key];
            console.log('key', key)
            this[key] = element;
        }
    }
    temp = null;
}

var y = new Y();
