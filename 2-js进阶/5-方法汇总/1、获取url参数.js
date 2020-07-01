// 获取 url后边的参数 以对象形式输出

// https://www.baidu.com?ie=utf-8&=1&from=baidu&keyword=vscode

let targetUrl = 'https://www.baidu.com?ie=utf-8&flag=1&from=baidu&keyword=vscode';


// 方法一,纯字符串方法

function queryUrlParamaters (url) {
    let position = url.indexOf('?');
    if (position < 0) return; 
    let str = url.slice(position+1);
    let ary = str.split('&');
    let obj = {};
    for(var i=0; i<ary.length; i++) {
        let arr = ary[i].split('=');
        let key = arr[0];
        let value = arr[1];
        obj[key] = value;
    }
    return obj
}

console.log(queryUrlParamaters(targetUrl));

// 方法二 URLSearchParams()函数

function getUrlParams (url) {
    let position = url.indexOf('?');
    if (position < 0) return; 
    let str = url.slice(position+1);
    let a = new URLSearchParams(str);
    let obj = {};
    for (const iterator of a) {
        var key = iterator[0];
        var value = iterator[1];
        obj[key] = value
    }
    return obj;
}

console.log(getUrlParams(targetUrl));


// 方法三 正则表达式子

function _getUrlParams (url) {
    
}

