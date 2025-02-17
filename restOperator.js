

const arr = [1,2,3,4,5]

// const first  = arr[0]
const rest  = arr.slice(1)
// console.log(rest);


// after the rest operator
const [first , ...rest1] = arr;

console.log(first);
console.log("rest" , rest1);
 