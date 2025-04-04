/**
 * Closures function occurs when inner function remember the variables from it's outer function.
 * even outer function has finished
 * 
 */

//=== First example for the closure

function counter (){
    let count  = 0;

    return ()=>{
        count++;
        console.log(count);

    }
}

const increment = counter()
increment()
increment()
// console.log(increment());