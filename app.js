// const bookexp = {
//     exp: function(){
//         return `read ${this.name} I teache you ${this.sub}`
//     }
// }

// const tech = Object.create(bookexp)
// tech.name = 'tech book'
// tech.sub = 'technology'

// const his = Object.create(bookexp)
// his.name = 'history book'
// his.sub = 'abute the past'

// console.log(tech.exp())
// console.log(his.exp())

class phone{
    constructor(name, company, model, color){
        this.name = name
        this.company = company
        this.model = model
        this.color = color
    }
    define(){
        return `${this.name} is a phone of ${this.company} company and was invented in ${this.model} and it has several colors such as ${this.color}`
    }
}

// const iphoneX = new phone('IphoneX','apple','2020','black')

// console.log(iphoneX.define())

class tablet extends phone{
    constructor(name, company, model, color, size){
        super(name,company,model,color)
        this.size = size
    }
}

const lenovo = new tablet('lenovo','lenovo','69','blue','356')
console.log(lenovo.define())