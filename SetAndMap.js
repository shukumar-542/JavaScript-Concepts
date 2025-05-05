const names = ["Shukumar", "Rita", "Abir", "Shukumar", "Abir"];

const uniqueName = new Set(names)

const uniqueNameArr = [...uniqueName]
// console.log(uniqueNameArr);

// Map

const userMap = new Map();

userMap.set("Shukumar", 25)
userMap.set("Rita", 30)
userMap.set('Abir', 22 )

// console.log(userMap.get("Rita"));

const obj ={"a":5, "b":10, "c":1}

const big = []

for (const key in obj) {
    console.log(obj[key]);
    big.push(key)
    // if()
}
console.log(big);