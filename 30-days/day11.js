// 📝 Task 1

const message = (name)=>{
    console.log("Hi" , name)
}


const greetingUser =()=>{
    console.log("Processing....")
    const name = "Alex"
    message(name)
}

greetingUser()


// 📝 Task 2

const addNumber = (a , b)=>{
    return a + b
} 

const calculate  = (a , b , operation)=>{
    console.log("Calculating...")
    return operation(a , b)
}

console.log(calculate(10 , 20 , addNumber))


// 📝 Task  3

const counter = () =>{
    let count = 0
    return ()=>{
        count++
        console.log(count)
    }
}

const incrementCounter = counter()
incrementCounter()
incrementCounter()
incrementCounter()


// 📝 Task 4 (Challenge 🔥)
const createGreating = (greetingWord) =>{
    return (name)=>{
        console.log(greetingWord , name)
    }
}


const greetInEnglish = createGreating("Hello")
const greetInSpanish = createGreating("Hola")

greetInEnglish("Alex")
greetInSpanish("Alex")