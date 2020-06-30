const user1 = {
    name: 'wang',
    sayName () {
       console.log('name -- ', this.name) 
    }
}

const user2 = {
    name: 'he',
}

user1.sayName.apply(user2)

