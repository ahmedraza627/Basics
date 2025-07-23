// 1. Methods in Objects:
// Create an object person with a method sayHi() that logs "Hello!"
// Call the method using person.sayHi()

const obj = {
    name: "Ahmed Raza",
    sayHi: function () {
        console.log("Hello!");
    }
}

obj.sayHi()

// 2. The this Keyword
// Inside the method sayHi, log this.name
// Create a name property in the object and see what this refers to

const obj1 = {
    name: "Sufiyan Junaid",
    sayHi: function () {
        console.log(`Hi!${this.name}`);
    }
}

obj1.sayHi()

// 3. Call, Apply, Bind
// Create two objects: user1 and user2 with different names
// Create a function printName() that logs this.name
// Use.call() and.apply() to call printName() with both objects
// Use.bind() to create a new function for user2 and call it
function printName() {
    console.log(this.name);
}

const newObj = {
    name: "Ahmed Raza",
}

const newObj1 = {
    name: "Michael james"
}

printName.call(newObj)
printName.call(newObj1)

const newPrint = printName.bind(newObj)
const newPrint1 = printName.bind(newObj1)

newPrint()
newPrint1()

// 4. Short Syntax for Methods
// Rewrite a method in an object using the short method syntax (no colon, no function keyword)

const newMethod = {
    name: "Aziz Abubakr",
    gender: "Male",
    age: 65,
    sayHi() {
        console.log(`${this.name},${this.gender},${this.age}`)

    }
}

newMethod.sayHi()

// 5. Factory Function
// Write a function createUser(name, age) that returns an object with name and age
// Each object should have a method greet()
// Create 3 users using this function

