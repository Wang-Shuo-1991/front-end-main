// 节流：不管操作多频繁，都按照固定频率执行。

function throttle (fn, timeout, interval) {
    var timer = null;
    var previous = null;

    return function () {
        var current = new Date();
        if (!previous) previous = now;
        if (current - previous > interval) {
            clearTimeout(timer);
            fn();
            previous = now;
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn()
            }, timeout);
        }
    }
}