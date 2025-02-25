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

console.log(maxValue);