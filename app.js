// function Person(name ,dob){
//     this.Name = name
//     // this.Age = age
//     this.birthday = new Date(dob)
//     // console.log(this)
//     this.caculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime()
//         const wa = new Date(diff)
//         return Math.abs(wa.getUTCFullYear() - 1970)
//     }
// }

// const Arash = new Person('arash','2/7/2005')
// console.log(Arash.caculateAge())
// // console.log(Arash)

// const name1 = 'brad'
// const name2 = new String('tom')
// console.log(typeof name2)

// function Person(name ,dob){
//     this.Name = name
//     // this.Age = age
//     this.birthday = new Date(dob)
//     // console.log(this)
    
// }

// Person.prototype.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime()
//         const wa = new Date(diff)
//         return Math.abs(wa.getUTCFullYear() - 1970)
// }

// Person.prototype.getFullName = function(lastName){
//     this.lastName = lastName
//     return this.lastName +' '+ this.Name
// }


// const Arash = new Person('Arash', '7/2/2005')
// console.log(Arash)
// console.log(Arash.calculateAge())
// console.log(Arash.getFullName('Arabi'))

const person = function(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}
person.prototype.greeting = function(){
    return `hello there ${this.firstName} ${this.lastName}`
}

const Arash = new person('Arash', 'Arabi')

console.log(Arash.greeting())

const customenr = function(firstName, lastName, age, phone){
    person.call(this, firstName, lastName)
    this.age = age
    this.phone = phone
}

customenr.prototype = Object.create(person.prototype)

const customenr1 = new customenr('brad', 'doe', 34,+989283848)

console.log(customenr1.greeting())