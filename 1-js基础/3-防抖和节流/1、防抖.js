// 无论是防抖还是节流，目的都是延迟执行

// 防抖： 无论操作多么频繁，只触发最后一次

function _debounce (fn, timeout) {
    var timer = null;
    // 这不就是个闭包嘛
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, timeout);
    }
}
