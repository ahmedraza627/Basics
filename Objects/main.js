//  1. Intro to Objects
// Exercise:

// Create an object person with properties: name, age, city

// Access person.name and person["city"]

// Add a new property gender

const obj = {
    "name": "Ahmed Raza",
    "age": 20,
    "city": "Karachi",
}

console.log("Name:", obj.name, ",City:", obj.city);

// 2. Dot vs Bracket Notation
// Exercise:

// Create an object:
let book = {
    "book title": "JS Magic",
    author: "Ahmed",
    pages: 300
};
// Access book title using bracket notation only.
console.log(book["book title"]);

// 3. Iterate Objects
// Exercise:

// Use for...in loop to print all keys and values of the object

for (let key in book) {
    console.log(`Keys:${key} and value: ${book[key]}`);
}

// Use Object.keys() and loop through it:


let keys = Object.keys(book); // book title,author,pages
for (let i = 0; i < keys.length; i++) {
    console.log(`key:${keys[i]}}`);
}

// 4. Computed Properties
//  Use computed properties to create an object with a dynamic key and assign it a value.

let key = "userName"
const computedObj = {
    [key]: "Ahmed Raza",
    userPassword: "Ahmed@123",
    userGender: "Male",
    useremail: "ahmedrazaafjn@gmail.com",
}

console.log(computedObj.userName);

// 5.Spread Operator in Objects

// Create two objects and Merge them using the spread operator into obj3

const spreadObj = {
    name: "Ahmed Raza",
    id: 324261,
    batch: 14,
    "course Name": "Modern Web and Mobile App Development",
    email: "ahmedrazaafjn@gmail.com",
    "current Month": 10

}

const spreadObj1 = {
    userName: "Sufiyan Junaid",
    uid: 324370,
    batchName: 11,
    "course": "Modern Web and Mobile App Development",
    userEmail: "sufiyan.junaidd@gmail.com",
    "Month": 5

}

const obj3 = { ...spreadObj, ...spreadObj1 }
console.log(obj3);

// 6. Object Destructuring
//Destructure the book object above to extract title and author
//Print both

let book1 = {
    "book title": "JS Magic",
    author: "Ahmed",
    pages: 300
};

const { ["book title"]: bookTitle, author } = book1
console.log(bookTitle);
console.log(author);


// 7. Objects Inside Array
// Create an array students like this:

let students = [
    { name: "Ahmed", age: 20 },
    { name: "Ayan", age: 18 }
]
// Loop through array and print name of each student


students.forEach((obj) => {
    console.log(`name:${obj.name}`);

})

// 8. Nested Destructuring
// Destructure 1st student’s name and age from above students array
// Hint: Use const [ { name, age } ] = students;

let destructureStudents = [
    { name: "Ahmed", age: 20 },
    { name: "Ayan", age: 18 }
]

const [value1] = destructureStudents
const { name, age } = value1

console.log(`name:${name} and age:${age}`);

// 9. Bonus Task – Bracket Notation with Spaces
// Add a key "favourite food" to person object
// Set value to "Biryani" using bracket notation
// Print the value

let detailKey = "favourite food"
const food = {
    [detailKey]: "Biryani",
    price: 400,
    "order Time": "30 minutes",
}

console.log(food["favourite food"]);
console.log(food["order Time"]);