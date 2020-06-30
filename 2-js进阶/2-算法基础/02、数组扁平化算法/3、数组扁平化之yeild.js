// yeild
 
function aryFlatten (ary) {
    if(Array.isArray(ary)){
        for(let i = 0 ;i<ary.length;i++){
            yield* iterTree(ary[i]);
        }
    } else {
        yield ary;
    }
}

