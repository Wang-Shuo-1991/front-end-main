// ^ 运算 -> 异或运算

var flag = false;
var value = null;
value = flag ?  0 : 1;
console.log(value);

console.log(value ^= 1);

// 只有 ^ 两边不同的值才会为 1， 否则为 0

console.log(true ^ false)