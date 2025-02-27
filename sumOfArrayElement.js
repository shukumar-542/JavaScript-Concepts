const sumOfElement  = (arr)=>{
    let sum = 0

    // 
    for (let i = 0; i< arr.length; i++) {
      sum += arr[i]
       
    }
    // return sum
    // Using reduce for sum
   return arr.reduce((total , current)=> total += current, 0)
}

const arr = [1,2,3,4]
console.log(sumOfElement(arr));