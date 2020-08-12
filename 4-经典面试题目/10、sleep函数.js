// sleep函数作用是让线程休眠，等到指定时间在重新唤起。

async function test () {
    console.log(`test start -- ${new Date()}`);
    await sleep();
    console.log(`test end -- ${new Date()}`);
}


// 两种方式
// 第一种： promise async await
function sleep () {
    // setTimeout(() => {
    //     console.log('timeout 2000')
    // }, 2000);

    return new Promise((res, rej) => {
        setTimeout(() => {
            res('hello, world')
        }, 2000);
    })
}

function test1 () {
    console.log('sleep1 test function')
}

// 第二种：回调函数
function sleep1(callback) {
    console.log(`${new Date()} -- sleep1`)
      setTimeout(() => {
          callback()
      }, 2000);  
}


test();

sleep1(test1);