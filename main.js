// Documenting all of my JavaScript Learnings and Exercises and Projects.

// Basics of Programming:

// ● Hello world program
// ● Declare variable using var
// ● More about variable
// ● Let
// ● Const
// ● String Indexing
// ● Useful string methods
// ● Template Strings
// ● Null, undefined, BigInt, typeof
// ● Booleans and Comparison Operator
// ● Truthy and Falsy Values
// ● If else statement
// ● Ternary Operator
// ● && || operator
// ● Nested if else
// ● If elseif else
// ● Switch statement
// ● While loop
// ● While loop examples
// ● For loop
// ● For loop examples
// ● Break and continue keyword
// ● Do while loop

// 1. Hello World Program
// Exercise:

// Q1: Print “Hello JavaScript Developer!” in the console.
// console.log("Hello JavaScript Developer!");

// Q2:Declare variable using var / let / const
// Exercises:

// Q: Declare your name using var, let, and const. Try re-declaring and re-assigning each.
// var userName = "Ahmed Raza"
// userName = "Ali Raza"
// console.log(userName);

// let name = "Junaid Haroon"
// name = "Safwan"
// console.log(name);

// const tempName = "Ahmed Raza"
// tempName = "Zain"
// console.log(tempName);

// Try this code and explain the output:

var a = 10;
var a = 20;
// console.log(a); // it will show 20 as an uotput because it will override the value

// 3. String Indexing
// Exercises:
// Find the first and last letter of "JavaScript".
let str = "JavaScript"
// console.log(str[0]);
// console.log(str[9]);

// Print character at index 3 of "frontend".
let char = "frontend"
// console.log(char[3]);

// 4. Useful String Methods
// Exercises:

// Take a string " Ahmed Raza " and clean it using trim().

let newStr = " Ahmed Raza "
// console.log(newStr.trim());

// Convert "developer" to uppercase.
let dev = "developer"
// console.log(dev.toUpperCase());

// Get "Ahmed" from "Ahmed Raza" using slice().
let userName = "Ahmed Raza"
// console.log(userName.slice(0, 5));

// 5. Template Strings
// Exercise:

// Use template strings to print:
// "My name is Ahmed and I am 20 years old."
// using variables name and age.

// let name = "Ahmed Raza"
// let age = 20
// console.log(`My name is ${name} and I am ${age} years old`);

// 6. Null, Undefined, BigInt, typeof
// Exercise:

// Create variables with null, undefined, BigInt, and print their typeof.

// let check = null
// let error = undefined
// let highInt = BigInt

// console.log(typeof (check));   // Object
// console.log(typeof (error));   // Undefined
// console.log(typeof (highInt)); // function

// 7. Booleans and Comparison Operators
// Exercises:

// Predict outputs of:

// console.log(5 > 3); // True
// console.log(10 == "10"); // True
// console.log(10 === "10"); // False

// 8. Truthy vs Falsy
// Exercise:

// What will this print and why?

// let value = ""; //
// if (value) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// output would be Falsy

// 9. If-Else Statements
// Exercise:

// Write a program that checks if age is above 18 or not and prints a message accordingly.

// let age = + prompt("Enter Your age:")
// if (age >= 18) {
//     console.log("You are above 18");

// }
// else {
//     console.log("You are below 18!");

// }

// 10. Ternary Operator
// Exercise:

// Rewrite the above age program using ternary operator.

// let age = +prompt("Enter your age:")
// age>=18? console.log("You are now 18+"):console.log("You are below 18");

// 11. && and || Operator
// Exercise:

// Create a login condition where both username and password must match.

// Add fallback if only one is correct.

// let username = prompt("Enter Your Username:")
// let password = prompt("Enter Your Password:")

// if (userName && password) {
//     if (userName === password) {
//         console.log("You can Login");

//     }
//     else {
//         console.log("Your Username and Password must be the same to login");

//     }

// }
// else if (userName || password) {
//     console.log("You have to match the userName and Password both.");

// }

// 12. Nested If-Else
// Exercise:

// Write a grading system:

// A: 90+

// B: 80–89

// C: 70–79

// Fail: <70

// let grade = prompt("Enter Your Percentage :")
// if (grade >= "90") {
//     console.log("A");
// }
// else if(grade >=80 && grade <90){
//     console.log("B");
// }

// else if(grade >=70 && grade <80){
//     console.log("C");
// }

// else if(grade <70){
//     console.log("Fail");
// }

// 13. Switch Statement
// Exercise:

// Convert the grading system above into a switch-case using ranges like:

// let marks = + prompt("Enter Your Marks:")
// let grade = Math.floor(marks / 10);

// switch (grade) {
//     case 10:
//     case 9:
//         console.log("A");
//         break;

//     case 8:
//         console.log("B");
//         break;

//     case 7:
//         console.log("C");
//         break;

//     case 6:
//         console.log("D");
//         break;

//     case 5:
//         console.log("E");
//         break;

//     case 4:
//         console.log("F");
//         break;
//     case 3:
//         console.log("F");
//         break;

//     case 2:
//         console.log("F");
//         break;

//     case 1:
//         console.log("F");
//         break;


//     default:
//         break;
// }

// 14. While Loop
// Exercise:

// Print numbers from 1 to 10 using while.

// let num = 0
// while(num<10){
//     num++
//     console.log(num);

// }

// 15. While Loop Practice
// Exercise:

// Sum of even numbers from 1 to 50 using while.

// let even = 0
// while (even < 50) {
//     even = even + 2
//     console.log(even);
// }

// 16. For Loop
// Exercise:

// Print table of 5 using for.

// for (let i = 0; i < 11; i++) {
//     let num = 5
//     console.log(`${num} x ${i} = ${num * i}`);

// }

// 17. For Loop Practice
// Exercise:

// Reverse loop from 20 to 1.

// for (let i = 20; i >= 1; i--) {
//     console.log(i);

// }

// 18. Break and Continue
// Exercises:

// Loop 1 to 20. Break on 13.
// for (let i = 0; i < 21; i++) {
//     if (i == 13) {
//         break;
//     }
//     console.log(i);
// }

// Loop 1 to 20. Skip multiples of 3 using continue.

// for (let i = 0; i < 21; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// 19. Do-While Loop
// Exercise:

// Run a loop that prints a countdown from 5 to 1, even if the number starts from 0.

// let num = 0
// do {
//     console.log(5 - num);
//     num++
// }
// while (num < 5)

// Mini Project Idea:
// Number Guessing Game

// Generate a random number between 1–10.

// Ask the user to guess.

// Show correct/incorrect.

let num = (Math.floor(Math.random() * 10))
let userGuess = + prompt("Guess a number:")
if (userGuess > num) {
    console.log("Incorrect and number guessed is too high");
}
else if (userGuess < num) {
    console.log("Incorrect and number guessed is too low");

}

else {
    console.log("You have guessed a correct number!");
}