// 原型继承
const user = {
    access: 0,
    level: 0,
    getLevel () {
        return this.level
    }
}

const admin = {
    access: 1,
    level: 1
} 

admin.__proto__ = user;

console.log(admin.getLevel())