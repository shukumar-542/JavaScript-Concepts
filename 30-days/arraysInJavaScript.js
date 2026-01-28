let nums = [10, 2, 3, 4, 5]


// Task 1 
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
}

// Task 2 
const total = nums.reduce((acc , current) => acc + current , 0)


// Task 3
const nameArr = ['Raza', "Rohit" , "Babu", "Asad"]
for (let index = 0; index < nameArr.length; index++) {
    const element = nameArr[index];
}

// Task 4
const evenNumber = nums.filter(num => num % 2 == 0)


//  Task 5
const getterNumber =  nums.reduce((acc , current)=> {
    if(current > acc){
        return acc = current
    }
    return acc
}, 0)
