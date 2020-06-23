// 闭包的另一个作用就是 处理回调函数。
// 回调函数是指在未来某个不确定的时间异步调用的函数。

function animate () {

    var tick = 0;

    var timer = setInterval(() => {
        if (tick < 10) {
            console.log(`tick -- ${tick}`)
            tick ++;
        } else {
            clearInterval(timer)
        }
    }, 100);
}

animate();

// timer tick 都是闭包内部函数外的变量，每次动画都会创建属于自己的私有变量。

// 综上所述，闭包的作用重要的作用就是保存私有变量，不会有变量污染的问题。