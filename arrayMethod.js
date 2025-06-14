
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
// console.log(resultEvery)

// Find index

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 400 }
]

// ❓ Use .findIndex() to get the index of the product named "Phone".
const phoneIndex =  products.findIndex(prodcut => prodcut.name === "Phone");
// console.log(phoneIndex)

const user = [
  { name: "Shukumar", age: 25 },
  { name: "Rita", age: 21 },
  { name: "Abir", age: 27 }
];

const marks = [40, 90, 70, 20, 100];
const sortedUser  = marks.sort((a , b)=> a - b)
console.log(sortedUser)