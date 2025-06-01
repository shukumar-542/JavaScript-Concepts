const names = ["Shukumar", "Rita", "Abir", "Shukumar", "Abir"];

const uniqueName = new Set(names);

const uniqueNameArr = [...uniqueName];
// console.log(uniqueNameArr);

// Map

const userMap = new Map();

userMap.set("Shukumar", 25);
userMap.set("Rita", 30);
userMap.set("Abir", 22);

// console.log(userMap.get("Rita"));

const obj = { a: 1000, b: 10, c: 11 };

const keyValue = [];

for (const key in obj) {
  keyValue.push([key, obj[key]]);
  // if()
}
keyValue.sort((a, b) => a[1] - b[1]);
// const result = assKey.map(val=> Object.keys(obj).find(key=> obj[key] === val))
// console.log(keyValue.map(x => x[0]));

const input = ["cat", "act", "hat", "stop", "pots", "tops"];
for (const word of input) {
  const key = word.split("").sort().join("");
  console.log(key);
 
}
