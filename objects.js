const user = {
    name: "Shukumar",
    age: 25,
    isAdmin: true,
};

//  1. Print each key and its value
for (const key in user) {
    //    console.log(`${key} : ${user[key]}`)
}

// 2. Store all keys in an array & 3. Store all values in an array

let keyArr = [];
let valueArr = []

for (const key in user) {
    keyArr.push(key)
    valueArr.push(user[key])
}

// console.log(valueArr)
const user1 = {
    name: "Shukumar",
    age: 25,
  };

  const newUser = {
    ...user1,
    location : "Dhaka",
    age : 30
  }
  console.log(newUser);
  