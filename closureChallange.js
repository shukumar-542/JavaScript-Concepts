// Make a function called createCounter() that returns an object with two methods:

// increment(): increases a private counter

// getCount(): returns the counter

// const createCounter =()=>{
//     let count = 0;

//     return{
//         increment : ()=>{
//             count++
//         },
//         getCount : ()=>{
//             return count;
//         },
//         decrement :  ()=>{
//             count--
//         },
//         reset : ()=>{
//             count = 0
//         }
//     }
// }


// const myCount = createCounter()
// myCount.increment()
// myCount.increment()
// myCount.decrement()
// myCount.reset()

var num1  = 1;

var num2 = 2;
var sum =  function (){
    var num = 3;
    return function(){
            num += 2
            return num1 + num2 + num
    }
}

var myFunc = sum()

console.dir(myFunc) 