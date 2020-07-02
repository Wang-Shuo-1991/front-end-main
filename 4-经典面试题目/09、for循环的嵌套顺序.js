// for 循环嵌套顺序不同
let t1 = new Date();
for (let i=0;i<10;i++) {
    for (let j=0;j<100;j++) {
        for (let k=0;k<1000;k++) {
            
        }
    }
}
let t2 = new Date();
console.log('t1--:', t2 - t1);

let t3 = new Date();
for (let i=0;i<1000;i++) {
    for (let j=0;j<100;j++) {
        for (let k=0;k<10;k++) {
            
        }
    }
}

let t4 = new Date();
console.log('t2--',t4 - t3);