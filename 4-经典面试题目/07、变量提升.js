var name = 'jack';

(function () {
    console.log('name', name)
    if (typeof name == 'undefined') {
        var name = 'sam';
        console.log(`hello,${name}`)
    } else {
        console.log(`goob job,${name}`)
    }
})();

(function () {
    console.log('iife1-name', name)
})();

(function () {
    console.log('iife2-name', name);
    var name = 'haha'; // undefined 变量提升了 
})();

(function () {
    console.log('iife3-name', name);
    let name = 'lala'; // refenceerror name is not defined
})();