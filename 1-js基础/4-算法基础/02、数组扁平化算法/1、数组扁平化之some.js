// 数组扁平化

function aryFlatten (ary) {
    
    while (ary.some(item => Array.isArray(item))) {
        
        ary = [].concat(...ary);
        console.log('ary', ...ary);
    }
    return ary;
}

console.log(aryFlatten([1,[2,3],['a',['b','c']]]))
