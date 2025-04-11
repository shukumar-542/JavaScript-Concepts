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

greeting.sayHello();

