var obj = {
    '2': '2',
    '3': '3',
    'length': 2,
    push: Array.prototype.push
};

obj.push(4);
obj.push(5);

console.log(obj)

// { ..., length: 4 }