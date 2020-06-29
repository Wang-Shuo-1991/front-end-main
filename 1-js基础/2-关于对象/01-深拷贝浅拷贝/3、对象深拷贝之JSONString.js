// 深拷贝则是对于复杂数据类型在堆内存中开辟了一块新的内存地址
// 【JSON.Stringfy 原理】
// JSON.stringify原理是把一个对象序列化成为一个JSON字符串，
// 将对象的内容转换成字符串的形式再保存在磁盘上，
// 再用JSON.parse()反序列化将JSON字符串变成一个新的对象

function deepClone (targetObj) {
    return JSON.parse(JSON.stringify(targetObj))
}

var target = {
    name: 'wang',
    age: 18,
    info: {
        gender: 'male',
        from: 'China',
        hobbies: {
            a: 'read',
            b: 'run',
            c: 'eat'
        }
    },
    fn: () => {
        console.log('this is a function')
    }
}

var obj = deepClone(target);
target.info.from = 'USA';
target.info.hobbies.c = 'drink';
console.log('obj',obj);
console.log('target',target);

// 经测试  这种方式就是深拷贝 但是不能拷贝 function,拷贝之后  function会 【丢失】