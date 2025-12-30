// Create a function that prints "Hello, World!"

function task1 (){
    console.log("Hello , World")
}

//  : Function with Parameters

function task2 (name){
    console.log(`Hello , ${name}`)
}

// Function with Return Value

function add (num1, num2){
    return num1 + num2
}


// Even or Odd Checker

function CheckOddEven (number){
    return  number % 2 === 0 ? "Even" :  "Odd"
}


// Arrow Function

const square = (num)=>  num * num


// Bonus Task (Optional 💪)

function findMax  (numbers){
    let maxNumber = 0;

    numbers.forEach(element => {
        if(element > maxNumber){
            maxNumber = element
        }
    });

    return maxNumber
}

console.log(findMax([10, 45, 2, 99, 23]))