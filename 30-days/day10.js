// 📝 Task 1

const { name, age, country } = { name: "Alex", age: 25, country: "India" }

console.log("Name ", name, "Age", age, "Country", country)


// 📝 Task 2
const { name: userName } = { name: "Alex", age: 25, country: "India" }


// 📝 Task 3

const [firstValue, , , lastValue] = [10, 20, 30, 40]

// 📝 Task 4

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(...arr1, ...arr2)


// 📝 Task 5 (Important 💪)
const user = { name: "Alex", age: 25 }
user.role = "Developer"
user.age = 30

const updateAllData = {
    ...user,
    role: "Developer",
    age: 30
}

console.log("first", updateAllData)