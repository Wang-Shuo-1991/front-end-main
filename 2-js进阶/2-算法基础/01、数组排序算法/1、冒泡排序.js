// 冒泡排序

function bubbleSort (ary) {
    for (var i=0; i<ary.length -1; i++) {
        for (var j=0; j<ary.length - 1 - i; j++) {
            if (ary[j] > ary[j+1]) {
                [ary[j], ary[j+1]] = [ary[j+1], ary[j]];
            }
        }
    }
    return ary;
}

console.log(bubbleSort([2,1,3,5,4]))



