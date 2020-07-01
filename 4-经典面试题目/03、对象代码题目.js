// 

var a = {
    n: 1
};

var b = a;

a.x = a = {
    n: 1000
};

// 【重点理解】 这里可以理解成 b.x = a = {n: 1000}

console.log(b) // b  -> { n: 1, x: { n: 1000 } }
console.log(a.x) // a -> {n: 1000} -> undefined