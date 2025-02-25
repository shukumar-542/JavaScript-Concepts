const numbers = [1, 8 ,2, 3, 4, 5];

// Total of sum
const sum = numbers.reduce((total , current)=>{
    return total += current
},0)


// maximum number in array

const maxValue = numbers.reduce((max, current)=>{
    if(max < current) max = current
    return max;
})

// merge different object in a single object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };


const mergeObject = [obj1 , obj2 , obj3].reduce((newObj , currentObj)=>{
    return { ...newObj , ...currentObj }
})


console.log(mergeObject);