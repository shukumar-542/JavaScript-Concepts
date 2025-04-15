const users = [
    { name: 'Shukumar', age: 25 },
    { name: 'Rita', age: 30 },
    { name: 'Abir', age: 22 },
];




//   1. Return names of users over 24
// 2. Sort by age DESC
const names = users.filter(user => user?.age > 24).sort((a, b) => b.age - a.age).map(user => user?.name)
//  3. Add a new user immutably
const newUser = [...users, { name: "Mr X", age: "32" }]

// 4. Count total age using reduce
const totalAge = users.reduce((acc, user) => { return acc + user.age }, 0)
// console.log(totalAge)


// 5. Create an object: { Shukumar: 25, Rita: 30, Abir: 22 }

const newObject = users.reduce((acc, curr) => {
    acc[curr.name] = curr.age
    return acc
}, {})
