// 快速排序法 思想就是取出中间索引项的值，小于他的在left， 大于他的在 right；

function rapidSort (ary) {
    // 递归函数一定要注意 结束条件 否则就是死循环
    if (ary.length <= 1) {
        return ary
    };
    let midIndex = Math.floor(ary.length/2);
    let midIndexValue = ary[midIndex];
    let left = [],right = [],mid = [];
    ary.forEach(item => {
        if (midIndexValue > item) {
            left.push(item)
        } else if (midIndexValue == item) {
            mid.push(item)
        } else {
            right.push(item)
        }
    })

    return rapidSort(left).concat(mid ,rapidSort(right))
}

console.log(rapidSort([2,4,1,3,3,3,6,5,7,0,8]));