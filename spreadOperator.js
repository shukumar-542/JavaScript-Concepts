const arr = [1,2,3,4,5];

// Spread arr with new number
const newArr = [1,3, ...arr]
console.log(newArr);


// combine with two array

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const combineTwoArr = [...arr1 , ...arr2]
console.log("Combined array",combineTwoArr);


// Passing argument to the function

const sum =(a , b , c)=>{
    return a + b + c;
}

const sumArr = [1 ,2,3];
const result = sum(...sumArr);
console.log("argument array",result);