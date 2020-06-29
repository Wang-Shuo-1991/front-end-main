// 第三方库 比如 lodash 或者是 jQuery 都有相对应的深拷贝的方法 比如 $.extend(deep, obj, ...)

// 自己写深拷贝就是通过递归函数进行拷贝的

function deepClone (targetObj) {
    let newObj = Array.isArray(targetObj) ? [] : {};

    if (targetObj && typeof targetObj == 'object') {
        for (const key in targetObj) {
            if (targetObj.hasOwnProperty(key)) {
                const element = targetObj[key];
                if (element && typeof element == 'object') {
                    newObj[key] = deepClone(element)
                } else {
                    newObj[key] = element;
                }
            }
        }
    }

    return newObj
}

var target = {
    name: 'ws',
    fn: () => {
        console.log('this is a function')
    },
    ary: [1,2,3,4],
    o: {
        h: 'aaaaaaa'
    }
};

var obj = deepClone(target);
target.o.h = 'zzzz';
obj.o.h = 'nnnnn';
console.log('obj', obj);
console.log('target', target);

// 这种自定义的深拷贝，采用递归属性解决的