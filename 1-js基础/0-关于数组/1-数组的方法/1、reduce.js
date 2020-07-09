// reduce

/**
 * 
 * var arr = [
        {
            a: 1,
            id: 0
        },
        {
            a: 2,
            id: 0
        },
        {
            a: 3,
            id: 0
        }
    ];

let val = arr.reduce((acc, cur) => {
    return acc + cur.a
}, 0)
 *  
 */

// acc -> 累加器 是recucer函数的返回结果 

// 数组扁平化
// var arr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// let ary = arr.reduce((a, b) => {
//     return a.concat(b)
// })

// console.log(ary)

// var a = ['a', 'b', 'c', 'd','a','d','a'];

// let count = a.reduce((a, cur) => {
//     if (cur in a) {
//         a[cur]++;
//     } else {
//         a[cur] = 1;
//     }
//     return a
// },{})

// console.log(count)


// 按照属性 对 object进行分类

// var a = [
//     {name: 'a', age: 10},
//     {name: 'b', age: 10},
//     {name: 'c', age: 15}
// ]

// let b = a.reduce((acc, cur) => {
//     var key = cur.age;
//     if (!acc[key]) {
//         acc[key] = []
//     }
//     acc[key].push(cur);
//     return acc;
// },{})

// console.log(b)


// 按顺序执行 promise *****

function p1 () {
    return new Promise((res, err) => {
        setTimeout(() => {
            console.log(1)
        }, 4000);
    })
}

function p2 () {
    return new Promise((res, err) => {
        setTimeout(() => {
            console.log(2)
        }, 3000);
    })
}

function p3 () {
    return new Promise((res, err) => {
        setTimeout(() => {
            console.log(3)
        }, 2000);
    })
}

function p4 () {
    return new Promise((res, err) => {
        setTimeout(() => {
            console.log(4)
        }, 1000);
    })
}


let promiseAry = [p1, p2, p3, p4];

// function runPromiseByQueue(myPromises) {
// myPromises.reduce(
//     (previousPromise, nextPromise) => {
//         console.log('previousPromise', previousPromise)
//         console.log('nextPromise', nextPromise)
//         return previousPromise.then(() => nextPromise())
//     },
//     Promise.resolve()
// );
// }

const createPromise = (time, id) => () =>
  new Promise(solve =>
    setTimeout(() => {
      console.log("promise", id);
      solve()
    }, time)
  );



  async function runPromiseByQueue(myPromises) {
    for  (let value of myPromises) {
        await value();
    }
  }

runPromiseByQueue([
  createPromise(3000, 1),
  createPromise(2000, 2),
  createPromise(1000, 3)
]);




