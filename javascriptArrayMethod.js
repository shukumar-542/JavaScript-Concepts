const celsiusTemps = [0, 10, 20, 30];

// F = C × 1.8 + 32

const fahrenheit = celsiusTemps.map(celsius =>  (celsius * 1.8 + 32))

// console.log(fahrenheit);

const words = ["shukumar", "rita", "abir"];
const upperCase = words.map(name => {
    let capitalized  = name[0].toUpperCase() 
    return capitalized.concat(name.slice(1))

})

console.log(upperCase);