const findMinMax = (arr)=>{
    if (arr.length === 0) return null; 
    let min = arr[0];
    let max = arr[0];
    for(let i = 0 ; i< arr.length ; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return [min , max]
}

const arr = [12,2,6,4,7,8]
console.log(findMinMax(arr));