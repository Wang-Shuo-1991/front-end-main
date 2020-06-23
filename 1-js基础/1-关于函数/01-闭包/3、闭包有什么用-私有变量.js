// 说了概念，闭包到底有什么用


// 1 -> 封装私有变量
+function () {
    
    function Cart () {
        var count = 0;

        this.getCount = function () {
            return count;
        }

        this.addCount = function () {
            count ++;
        }
    }

    var cart = new Cart();
    console.log(cart.count);// undefined
    // count 就是构造函数Cart中的变量，我们在函数外部不能直接获取count变量，
    // 但是通过内部的函数 getcount，以闭包的形式在外部调用getcount间接的获取内部的私有变量。
    console.log(cart.getCount());

} ();