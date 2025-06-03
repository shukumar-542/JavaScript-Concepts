const numbers = [10, 22, 45, 60, 75];

const getter = numbers.find(number =>  number > 50);
// console.log(getter)

// Some Method
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 18 },
  { name: "Dave", age: 17 }
];


const resutl = users.some(user => user.age >= 18)
const resultEvery = users.every(user => user.age >= 18)
console.log(resultEvery)