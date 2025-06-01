const numbers = [10, 22, 45, 60, 75];

const getter = numbers.find(number =>  number > 50);
// console.log(getter)

// Some Method
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
];


const resutl = users.some(user => user.age >= 18)
console.log(resutl)