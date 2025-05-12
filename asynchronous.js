// function greetUser(name, callback) {
//     callback();
//     console.log("Hello, " + name);
//   }

//   greetUser("Shukumar", function () {
//     console.log("This is the callback function.");
//   });

setTimeout(() => {
  console.log("Wait 1 second: ⏱️ 1 second passed");

  setTimeout(() => {
    console.log("Wait 2 second: ⏱️ 2 second passed");
    setTimeout(() => {
      console.log("Wait 4 second: ⏱️ 4 second passed");
    }, 1000);
  }, 2000);
}, 1000);
