// 📝 Task 1

const message = (name)=>{
    console.log("Hi" , name)
}


const greetingUser =()=>{
    console.log("Processing....")
    const name = "Alex"
    message(name)
}

// greetingUser()


// 📝 Task 2

const addNumber = (a , b)=>{
    return a + b
} 

const calculate  = (a , b , operation)=>{
    console.log("Calculating...")
    return operation(a , b)
}

// console.log(calculate(10 , 20 , addNumber))


// 📝 Task  3

const counter = () =>{
    let count = 0
    return ()=>{
        count++
        console.log(count)
    }
}

const incrementCounter = counter()
// incrementCounter()
// incrementCounter()
// incrementCounter()


// 📝 Task 4 (Challenge 🔥)
const createGreating = (greetingWord) =>{
    return (name)=>{
        console.log(greetingWord , name)
    }
}


// const greetInEnglish = createGreating("Hello")
// const greetInSpanish = createGreating("Hola")

// greetInEnglish("Alex")
// greetInSpanish("Alex")


// Task 1 – setTimeout (Basic Delay)


// console.log("Start")  
// setTimeout(()=>{  
//     console.log("Hello after 2 seconds")
// }, 2000)



// 📝 Task 2 – Understanding Async Order

const delay  = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const asyncTask = async () => {
    console.log(1)
    setTimeout(() =>{
        console.log(2)
    } , 1000)
    console.log(3)        
}

// asyncTask()


// Task 3 – setInterval (Repeating Task)

let count  = 1 ;

const intervalId = setInterval(()=>{
    // console.log(count)
    count++
    if(count > 5){
        clearInterval(intervalId)
    }
} , 1000)


// Task 4 – Simulating API Call


const fetchDatas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {  
            resolve("Data fetched successfully!")
        }
        , 3000)
    })
}

const getData = async () => {
    console.log("Fetching data...")
    const data = await fetchDatas()
    console.log(data)
}

// getData()


// Task 5 – Callback with setTimeout (Important 💪)



const fetchData = (callback) => {
    console.log("Fetching data...")
    setTimeout(() => {
        callback("Data fetched successfully!")
    }, 2000)
}

fetchData((message) => {
    console.log(message)
})


