function changeObj (o) {

    // 这里相当于 var o = web

    o.site = 'baidu';

    // 这里 o 重新指向了新的地址
    o = new Object();
    o.site = 'google'
}

let web = new Object();
changeObj(web);
console.log(web)