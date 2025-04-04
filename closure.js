/**
 * Closures function occurs when inner function remember the variables from it's outer function.
 * even outer function has finished
 * Closure allow to us to create private variable that can not  be access directly
 * Closure allow to us generate multiple function dynamically
 *  
 */

//=== First example for the closure

function incrementDecrement() {
  let count = 0;

  return {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: () => {
      count--;
      console.log(count);
    },
  };
}

const counter = incrementDecrement();
// counter.increment()
// counter.increment()
// counter.decrement()
// increment()
// increment()
// console.log(increment());

// ==== Second example 
// closure allow to us generate multiple function dynamically

function greeting (message){
    
    return (name)=>{
        console.log(message , name);
    }
}
const hello = greeting("Hi");

hello("Shukumar")
