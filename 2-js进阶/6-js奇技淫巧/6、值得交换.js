// 值的交换

var a = 10;
var b = 20;

 // 解构
[a, b] = [b, a];
console.log(a,b)

// 异或赋值 运算
var c = 30;
var d = 40;

c ^= d;
d ^= c;
c ^= d;

console.log(c, d)