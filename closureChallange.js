// Make a function called createCounter() that returns an object with two methods:

// increment(): increases a private counter

// getCount(): returns the counter

const createCounter =()=>{
    let count = 0;

    return{
        increment : ()=>{
            count++
        },
        getCount : ()=>{
            return count;
        },
        decrement :  ()=>{
            count--
        },
        reset : ()=>{
            count = 0
        }
    }
}


const myCount = createCounter()
myCount.increment()
myCount.increment()
myCount.decrement()
myCount.reset()
console.log(myCount.getCount());