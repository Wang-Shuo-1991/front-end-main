//  
var target = {
    name: 'wang',
    age: 10,
    info: {
        job: 'coder',
        from: 'China',
        hobbies: {
            a: 'read',
            b: 'sing'
        }
    }
}

let obj = {...target};
target.name = 'he';
target.info.job = 'farmer';
console.log('obj', obj);
console.log('target', target);

// 结论是 扩展运算符是浅拷贝  尤其是对于属性值为引用数据类型的  无法进行深拷贝