// 插入排序 -> 

function insertSort (ary) {
    // 新开一个数组，并把第一项放进数组中
    let arr = [];
    arr.push(ary[0]);

    // ary 第二项开始去循环
    for (var i=1; i<ary.length; i++) {
        let aryEle = ary[i];

        // 取出 ary 中的每一项和新数组中的从最后一项开始的每一项比较
        for (var j=arr.length -1; j>=0; j--) {
            let arrEle = arr[j];

            // 如果ary中的项目大于新数组中的项目  就排在新数组中该项目的后边
            if (aryEle >= arrEle) {
                arr.splice(j+1, 0, aryEle);
                break;
            }

            // 如果 比较到 j=0了  说明这个ary中的这个项目是最小的。直接放在最前边就可以了。
            if (j==0) {
                arr.unshift(aryEle);
            }
        }
    }

    return arr;
}

console.log(insertSort([4,2,3,1,1,5]));