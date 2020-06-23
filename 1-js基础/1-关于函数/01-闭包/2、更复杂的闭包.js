var outerValue = 100;
var later;

function outerFn () {
    var innerValue = 200;

    return function innerFn () {
        console.log(innerValue + outerValue)
    }
}

// 函数执行完毕之后，作用域并不会消失，
// 因为 innerFn访问了outerFn作用域下的innerValue，创建了闭包
later = outerFn();

// 所以在innerFn执行的时候还可以访问带 innerValue
later();



