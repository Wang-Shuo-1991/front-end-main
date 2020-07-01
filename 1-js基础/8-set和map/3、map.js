// map和set的区别：集合是 [value, value] 而字典是 [key, value]的形式储存的

const s = new Set([
    [1, 2],
    [3, 4]
]);

console.log(new Map(s))