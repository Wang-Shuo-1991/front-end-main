// 闭包是什么?
// 

var outerValue = 'outer';

function innerFn () {
    console.log(`inner function get outer value - ${outerValue}`)
}