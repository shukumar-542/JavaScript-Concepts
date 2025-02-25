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
}, {})

// Grouping brand according their name
const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiaomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]


const productGroup = shoppingCart.reduce((groupProduct , product)=>{
    
    const name = product.name
    if(groupProduct[name] == null){
        groupProduct[name] = []
    }
    groupProduct[name].push(product)
    
    return groupProduct
    
},{})







console.log(productGroup);