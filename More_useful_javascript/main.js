// 1. Iterables
// Create a string and use a for...of loop to print each character
// Repeat the same with an array

let str = "Ahmed Raza"
for (let char of str) {
    console.log(`char : ${char}`);

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let arrays of arr) {
    console.log(`value:${arrays}`);
}

// 2.Sets
// Create a new Set and add these values: "Ahmed", "Ali", "Ahmed"
// Print the size of the set
// Loop through the set using for...of

let newSets = new Set(["Ahmed", "Ali", "Ahmed"])
console.log(newSets);
for (let key of newSets) {
    console.log(`${key}`);
}

// 3. Maps
// Create a new Map()
// Set key - value pairs:

// "name" → "Zoro"

// "age" → 20
// Get the value of "name"
// Loop through map using for...of

let newMap = new Map()
newMap.set("name", "Zoro")
newMap.set("age", 20)
console.log(newMap.get("name"));

for (let [key, value] of newMap) {
    console.log(`key:${key} and value:${value}`);
}

// 4. Object.assign()
// Create two objects:

let a = { x: 1, y: 2 };
let b = { z: 3 };
// Merge both into a third object using Object.assign()
// Change a value in c and show original a is unaffected

const a1 = { x: 1, y: 2 };
const b1 = { z: 3 };
const c = Object.assign(a1, b1)

c.x = 10
console.log("Cloned", c);
console.log("Original", a1); // it's mutating

// 5. Optional Chaining ?.
// Create an object:

let user = {
    name: "Ahmed",
    address: { city: "Karachi" }
}
// Try to access user.address.city (✅)
// Then try user.address.pincode using ?.
// Then try user.contact?.phone (undefined)

const user1 = {
    name: "Ahmed",
    address: { city: "Karachi" },
}

console.log(user1?.address?.city);
console.log(user1?.address?.pincode);
console.log(user1?.contact?.phone);

// 6. Bonus Combo
// Create a Map where key is an object:

// let user1 = { name: "Ahmed" }
// Set user1 as key and value "Active"
// Retrieve that value using the object

const newMap1 = new Map()
const newObj = {
    name: "Ahmed Raza"
}
newMap1.set(newObj, "Active")
const value = newMap1.get(newObj);
console.log(value);