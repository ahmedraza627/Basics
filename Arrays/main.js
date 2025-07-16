//  1. Intro to Arrays
// Exercises:

// Create an array of your 5 favorite fruits.

// Print the length of the array.

// Print the first and last fruit.

const arr = ["Apple", "Grapes", "Banana", "Orange", "Kiwi",]
console.log(arr.length);
console.log(arr[0], "and", arr[4]);

// 2. Push, Pop, Shift, Unshift
// Exercises:
// Task: Explain what happens after each step.

let fruits = ["apple", "banana", "mango"];
fruits.push("grapes"); // Add at end /["apple", "banana", "mango",Grapes]
fruits.pop();          // Remove from end ["apple", "banana", "mango"]
fruits.shift();        // Remove from start ["banana","mango"]
fruits.unshift("kiwi"); // Add at start ["kiwi","banana","mango"]
console.log(fruits); // ["Kiwi","banana", "mango"]

// 3. Primitive vs Reference Data Types
// Exercise:

let a = 5;
let b = a;
b++;
console.log(a, b); // Primitive: values copied

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1, arr2); // Reference: same memory

// 4. Clone Array & Spread Operator
// Exercises:

// Clone an array using:

// // slice()
let nameArr = ["Mudasir Junaid", "Ahmed Raza", "Sufiyan Junaid", "Ayan Junaid"]
let nameArr1 = ["Shayan ", "Shoaib", "Suresh", "Hitesh"]
let sliceArr = nameArr.slice(0)
console.log(sliceArr);

// // concat()
let concatArr = nameArr.concat(nameArr1)
console.log("ConcatArr", concatArr);

// // spread operator [...]

let spreadArr = [...nameArr, ...nameArr1]
console.log("Spread Arr", spreadArr);

// 5. For Loop in Array
// Exercise:
// use for loop in this array

let nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// 6. Use Const for Arrays
// Exercise:

// Create an array using const and push items into it.
const constArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(constArr.push(10));
console.log(constArr); // it has pushed the nuumber 10 in the arr Array.

// Try reassigning the whole array — what error comes?
// constArr = [25, 50, 75, 100, 125, 150, 175, 200]
// console.log(constArr); // error, assignment to constant variable

// 7. While Loop in Array
// Exercise:
// use while loop in this array.

let i = 0;
let loopArr = [10, 20, 30];
while (i < loopArr.length) {
    console.log(loopArr[i]);
    i++
}

//  8. For Of Loop
// Exercise:

// use for of loop and get all characters in uppercase:

let animals = ["cat", "dog", "lion"];
for (let key of animals) {
    console.log(key.toUpperCase());
}

// 9. For In Loop
// Exercise:

// use For of loop and get the index and values both:

let marks = [80, 90, 100];
for (let key in marks) {
    console.log(`index:${key} and values:${marks[key]}`);

}

// 10. Array Destructuring
// Exercises:

// destructure that array values and print them separately.

let names = ["Ahmed", "Ayan", "Zaid"];
let [firstName, secondName,thirdName] = names
console.log(firstName);
console.log(secondName);
console.log(thirdName);

// Mini Project Idea: Todo List Simulation
// Create an array tasks = []

let emptyArr = []
// // Use push() to add tasks.
emptyArr.push("Ahmed Raza", "Mudasir Junaid", "Sufian Junaid", "Ayan Junaid",) // add task

// // Use pop() or splice() to remove tasks.
emptyArr.pop() // remove task ["Ahmed Raza", "Mudasir Junaid", "Sufian Junaid"]
emptyArr.splice(1, 1) // for removing from any index. ["Ahmed Raza","Sufian Junaid"]
console.log(emptyArr);

// // Loop through tasks and print all.

for (let key of emptyArr) {
    console.log(`Remainning elements: ${key}`);

}

