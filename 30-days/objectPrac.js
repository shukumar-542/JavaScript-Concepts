const Student = {
    name : "Alex",
    age :  25,
    course : "english"
}

// Task 1

for (const key in Student) {
   console.log(Student[key])
}

// Task 2

Student.Grade = 3.4
Student.age = 35


// Task 3
const Student2 = {
    name : "Alex",
    age :  25,
    course : "english",
    getDetails : function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

Student2.getDetails()


// Task 4

for (const key in Student) {
   console.log( `${key} : ${Student[key]}`)
}

// Task 5

const {name , course} = Student