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

var obj = Object.assign(target, {
    age: 20000
})

target.name = 'zzzzz';
target.info.job = 'farmer'
console.log('obj', obj);
console.log('target', target);

// 结果是 Object.assign 是浅拷贝