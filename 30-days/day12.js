
// 📝 Task 1 – Create Your First Promise

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!")
    }, 2000)
})
promise.then((message) => {
    // console.log(message)
})


// Task 2 – Promise Rejection

let randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        if(randomNumber > 0.5){
            resolve("Success!")
        } else {
            reject("Something went wrong")
        }   
    }, 2000)
})

randomPromise
    .then((message) => {
        // console.log(message)
    })
    .catch((error) => {
        // console.error(error)
    })


    // Task 3 – Promise Chaining


    let promiseChaining = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(10)
        }, 2000)
    })
//    .then((number) => {
//         console.log(number)
//         return number * 2
//     })
//     .then((number) => {
//         console.log(number)
//         return number + 5
//     })
//     .then((number) => {
//         console.log( "Final result:", number) 
    // })





    // Task 4 – Simulate API Processing

const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "John Doe" , age : 25})
        }, 2000)
    })
}

getUser().then((user) => {
    console.log("Fetching user...")
    console.log("User received:", user.name)
})


// Task 5 – Promise + finally()

let promiseWithFinally = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5 
        if(success){
            resolve("Operation successful!")
        }
        else{
            reject("Operation failed!")
        }   
    }, 2000)
})

promiseWithFinally
    .then((message) => {
        console.log(message)    
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("Operation completed")
    })