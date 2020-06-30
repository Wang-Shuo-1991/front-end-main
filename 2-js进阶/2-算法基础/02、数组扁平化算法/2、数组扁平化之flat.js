// es6 flat

function aryFlatten (ary) {
    if (!Array.isArray(ary)) return;
    return ary.flat(Infinity)
}

console.log(aryFlatten([1,2,['a','b',['中','文',[1,2,3,[11,21,31]]]],3]));