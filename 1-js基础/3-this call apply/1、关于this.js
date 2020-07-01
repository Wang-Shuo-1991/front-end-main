// 关于 this
// this -> 运行环境 ； 


// 'use strict';

function User (name, age) {
    console.log('user', this)
    this.name = name;
    this.age = age;
    this.fn = () => {
        console.log('fn', this.name)
    }
}


