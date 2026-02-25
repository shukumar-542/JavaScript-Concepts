// Task 1

const students = [
  { name: "Alex", age: 20, course: "English" },
  { name: "Ravi", age: 22, course: "Math" },
  { name: "Sara", age: 21, course: "Science" },
  { name: "Sani", age: 23, course: "Bangla" },
]; 

// Task 2

// students.filter(student =>console.log(student.name))


// 📝 Task 3

const aboveAge = students.filter(student => student.age > 21)
// console.log(aboveAge)


// 📝 Task 4

const findName = students.find(student => student.name === "Alex")
// console.log(findName)

// 📝 Task 5 (Important 💪)


const averageAge = students.reduce((sum , student)=> sum + student.age , 0)

console.log(averageAge / students.length)