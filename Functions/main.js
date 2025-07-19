// 1. Function Declaration
// Q1: Create a function named greet that logs "Hello, Javascript!" and call the function

function greet() {
    console.log("Hello! JavaScript");
}
greet()

// 2.Function Expression
// Q1: Store a function in a variable add that adds two numbers and returns the result, call the function with values 3,7 and print the result.

let addFunc = function add(num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(addFunc(3, 7));

// 3. Arrow Function
// Q1: Convert the previous add function into an arrow function and print the output

const add = (num1, num2) => {
    let sum = num1 + num2
    return sum
}

console.log(add(3, 5));

// 4. Functions are hoisted ?
// Q1: Create a function and call it before declaring it.
// Q2: Do the same with a function expression and see what error comes.

// hoisted() // Function declaration can be hoisted

function hoisted() {
    console.log("Ahmed Raza");
}

// hoisted() // can't be hoisted, cannot access function before initialization
let hoisted1 = function name() {
    console.log("Ahmed Raza");

}

// 5. Function inside Function

// Q1: Create a function outer() inside it, define another function inner() that logs "Inside inner", call both properly.

function outer() {

    console.log("Outer Function");

    function inner() {
        console.log("inside inner");

    } inner()

}
outer()

// 6. Lexical Scope
// Declare a variable in outer function
// Access it in the inner function and log it.

let name = "Ahmed Raza"
function myFunc() {
    console.log(`Name:${name}`);

}
myFunc

// 7. Block Scope vs Function Scope
// Declare a variable with let inside {} block and try accessing it outside
// Do the same with var and compare.

// Block Scope:

{
    let idName = "Ahmed Raza"
}

// console.log(idName); // Name can't be access outside the block.

{
    var newName = "Sufiyan Junaid"
}
console.log(newName); // newName can be accessed because it is a global scope.

// 8. Default Parameters
// Create a function that takes 2 numbers but assigns default 5 to second parameter
// Call it once with 2 values, once with 1.

function newFunc(num1, num2 = 5) {
    let sum = num1 + num2
    return sum
}

console.log(newFunc(5));

// 9. Rest Parameters
// Create a function that takes any number of arguments and returns their sum
// Use the rest parameter ...nums inside the function.

function sum(...a) {
    let total = 0
    for (let key of a) {
        total = total + key
    }
    console.log(total);

}

sum(1000, 1000, 1000, 500, 500, 350)

// 10. Parameter Destructuring
// Pass an object as argument:

let user = { name: "Ahmed", age: 20 }
// Destructure the object inside the function parameters to get name and age..

function profileInfo({ name, age }) {
    console.log(`name:${name} and age ${age}`);

}
profileInfo(user)

// 11.Callback Functions
// Write a function sayHello(callback) that first logs "Hello"
// Then calls the callback() function passed to it.

function sayHello(cb) {
    console.log("Testing Normal Fucntion!");
    cb()
}
sayHello(cb)

function cb() {
    console.log("CallBack Function Test!");

}

// 12. Functions Returning Functions
// Create a function outer() that returns another function inner()
// Call outer() and then immediately call the returned function.

function outer() {
    console.log(`Outer Function`);

    function inner() {
        console.log(`Inner Function`);
    }

    return inner
}

outer()()

// 13. MakeMeLaugh

// Write a function called makeMeLaugh()
// It should return another function called joke()
// joke() should log "Why don't scientists trust atoms? Because they make up everything!"

// Call makeMeLaugh()() and see the result

function makemeLaugh() {
    console.log("Make me laugh 😄");

    function joke() {
        console.log("Why don't scientists trust atoms? Because they make up everything!");
    }

    return joke
}

makemeLaugh()()

// 2. Greet Generator 🤝

// Write a function called greetGenerator(name)
// It should return another function that logs: "Hello, [name]!"

// Example:

function greetGenerator(name) {
    console.log("Inside greet generator");

    function greet() {
        console.log(`Hello,${name}`);
    }

    return greet
}

greetGenerator("Ahmed Raza")()