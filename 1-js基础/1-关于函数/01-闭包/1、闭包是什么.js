// 闭包是什么?
// 看一个不起眼的例子

var outerValue = 100;

function innerFn () {
    let innerValue = 200;
    console.log(innerValue + outerValue)
}

innerFn();// -> 300


// 好了，至此，闭包已然完成了。
// 如果一头雾水，那么可以温习一遍概念。
// 【闭包】：允许函数访问并可以操作函数外部的变量的就称之为闭包。
// 分析上边的代码， innnerFn 函数在其内部可以访问到函数外部的变量.满足闭包概念。