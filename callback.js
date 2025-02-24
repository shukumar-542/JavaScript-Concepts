/**
 * Callback function is a function that pass as an argument to the another function. and execute later after another function is complete.
 * Basically for asynchronous operation we have use callback function.
 * callback function handle asynchronous operation and event handling and higher order function.
 *
 *
 *
 *  */

// basic callback function
function step1(name, age, callback) {
  console.log("my name is", name, "age", age);
  callback();
}

function Bio() {
  console.log("I am a frontend developer");
}

// step1("shukumar", 27, Bio);

// Callback helling

const start = (callback) => {
  console.log("Password is correct!");
  callback();
};


const step2 = (text,callback)=>{
    console.log("Login Successfully!");
    console.log(text);
    callback();
}
const step3=()=>{
    console.log("See the profile page!");
}

start(()=>{
    step2( "Wow" , ()=>step3())
})



