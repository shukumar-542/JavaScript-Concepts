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
printName.call(person , address , phone)


