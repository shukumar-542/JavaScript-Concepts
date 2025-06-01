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

var num1 = 1;

var num2 = 2;
var sum = function () {
    var num = 3;
    return function () {
        num += 2
        return num1 + num2 + num
    }
}

var myFunc = sum()

// console.dir(myFunc) 

const obj = { "a": 1, "b": 10, "c": 2 }

let maxValue = []
for (const key in obj) {
    maxValue.push(obj[key])
}
const sortedValue = maxValue.sort((a, b) => a - b);
const result = sortedValue.map(val =>
    Object.keys(obj).find(key => obj[key] === val)
);
console.log(Object.keys(obj))



const Welcome  = ()=> console.log("Hello This is Shukumar");

function once (fn){
    let called  = false;
    return function (){
        if(!called){
        called = true;
        return fn();
    }else {
        console.log("already called , skipping...");
    }
}
}

// const result = once(Welcome)
result()
result()
result()
