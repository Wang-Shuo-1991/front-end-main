

// 易错 对象的key只能是string或者是symbol，想要不被覆盖，用symbol，或者是map

var a = {},b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
// a = {'123': 'b', 123: 'c'}
console.log(a)
console.log(a[b])