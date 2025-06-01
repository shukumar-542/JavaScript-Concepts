const celsiusTemps = [0, 10, 20, 30];

// F = C × 1.8 + 32



const fahrenheit = celsiusTemps.map(celsius =>  (celsius * 1.8 + 32))

// console.log(fahrenheit);

const words = ["shukumar", "rita", "abir"];
const upperCase = words.map(name => {
    let capitalized  = name[0].toUpperCase() 
    return capitalized.concat(name.slice(1))

})

// Filter Even Number
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumber = numbers.filter(number=>  number % 2 === 0)
// console.log(evenNumber);


// Reduce sum
const nums = [10, 20, 30, 40];
const totalSum  = nums.reduce((acc, current)=>acc + current ,0)

// console.log(totalSum);

// Flatten an Array of Arrays

const nested = [[1, 2], [3, 4], [5, 6]];

const flatArray = nested.reduce((acc, current)=>acc.concat(current), [])
console.log(flatArray);
