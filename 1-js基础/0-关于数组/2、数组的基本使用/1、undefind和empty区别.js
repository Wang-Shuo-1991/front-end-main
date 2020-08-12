// 创建一个元素均为 empty 长度为20的数组
let arr1 = Array(20);

// 创建一个元素均为 undefined 长度为20的数组
let arr2 = Array.apply(null, { length: 10 });

console.log(arr1[0] == arr2[0])
console.log(arr1[0] === arr2[0])

// 使用forEach 方法
arr1.forEach(item => {
    console.log(`arr1 -> 元素是 ${item}`)
})

arr2.forEach(item => {
    console.log(`arr2 -> 元素是 ${item}`)
})