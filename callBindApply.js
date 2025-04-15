// Implicit binding 
// explicite binding 
// new binding 
// window binding



// implicit binding

const greeting ={
    name : "Shukumar",
    sayHello : function(){
        console.log(this.name)
    }
}

// greeting.sayHello();


// Explicit binding
// call parameter ==============
// 1st --- object 
// 2nd and more ---- variable

const printName = function ( address , phone){
    console.log(this.name , this.city,` ${address},  ${phone}`)
}

const person ={
    name : "Shukumar Ghosh",
    city : "Dhaka"
}

const phone = "01872999038"
const address = "Jhenaidah"
const newFunc = printName.bind(person , address , phone)
newFunc()
const bio = [address , phone]
// printName.apply(person , bio)


// new binding

function Person (name , city){
    this.name = name,
    this.city = city
    console.log(`Name : ${this.name} city ${this.city}`)
}

// const shukumar = new Person("Shukumar" , "Dhake")
// const Manik = new Person("manik" , "Dhaka")

//============= Window binding ============//

