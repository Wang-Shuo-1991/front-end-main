// <div><p>123</p></div> virtual DOM 用一个对象的形式模拟树形结构

var Vnode = {
    tag: 'div',
    children: {
        tag: 'p',
        text: '123'
    }
}

var oldNode = {
    tag: 'div',
    
}