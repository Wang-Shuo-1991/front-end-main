// 题目 ['1','10','20'].map(parseInt)

console.log(['1','10','20'].map(parseInt));

// 以上高阶函数 经拆分可以看做下边的代码
function myMapParseInt (ary) {
    return ary.map((item, index) => {
        return parseInt(item, index)
    })
}

console.log(myMapParseInt(['1','10','12','20']))
