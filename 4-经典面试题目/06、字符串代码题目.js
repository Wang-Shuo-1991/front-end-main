console.log(String(11) == new String(11))
console.log(String(11) === new String(11))

console.log(new String(11))

// new String是对象没错，但是在 == 时候会进行隐式转换； new String（11）.toString() === '11'