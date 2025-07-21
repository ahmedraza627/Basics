// 1. forEach Method
// Use .forEach() to:
// Print each number
// Print square of each number

let num = [1, 2, 3, 4, 5]
num.forEach(function (value) {
    console.log("Value:", value);
    console.log("Square value:", value * value);

})

// 2. map Method
// Given let prices = [100, 200, 300]
// Use .map() to:

// Return a new array with all prices doubled

// Store and log the new array

let prices = [100, 200, 300]

const newPrices = prices.map(function (value) {
    return value * 2;
})

console.log(newPrices);

// 3. filter() Method
// Given array [5, 12, 8, 130, 44], use filter() to extract only numbers > 10
// Print the result.

const array = [5, 12, 8, 130, 44]
const newArray = array.filter(function (value) {
    return value > 10
})

console.log(newArray);

// 4. reduce() Method
// Use reduce() to find the sum of [1, 2, 3, 4, 5]
// Use another reduce to find the product


//For sum:
const arr = [1, 2, 3, 4, 5]
const sums = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log(sums);

// For Product:
const product = arr.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue
}, 1)

console.log(product);

// 5. sort() Method
// Given [40, 100, 1, 5, 25], use sort() to arrange them:

// In ascending order
const nums = [40, 100, 1, 5, 25]
const ascending = nums.sort(function(a,b){
    return a-b
})

console.log(ascending);

// In descending order
const descending = nums.sort(function(a,b){
    return b-a
})
console.log(descending);

// 6. find() Method
// Given [10, 20, 30, 40, 50], use find() to get the first number > 25
// Print it

const number = [10, 20, 30, 40, 50]
const great = num.find(function (value) {
    return value > 25
})

console.log(great);

// 7. every() Method
// Use every() to check if all numbers in [2, 4, 6, 8] are even
// Log true/false

const even = [2, 4, 6, 8]
const evenCheck = even.every(function (value) {
    return value % 2 == 0
})

console.log(evenCheck);

// 8. some() Method
// Check if some numbers in [1, 3, 5, 8] are even using some()
// Log true/false

const numCheck = [1, 3, 5, 8]
const someMethod = numCheck.some(function (value) {
    return value % 2 == 0
})
console.log(someMethod);

// 9. fill() Method
// Create an array of 5 elements
// Use fill("Ahmed") to fill all items
// Use fill("Zoro")to fill from index 1 to 3

const names = ["Ahmed", "Sufiyan", "Ayan", "Junaid", "Suresh",]
const newName = names.fill("Ahmed", 1, 5)
console.log(newName);
const character = names.fill("Zoro", 1, 4)
console.log(character);

// 10. splice() Method
// Given [1, 2, 3, 4, 5]
// Use splice() to:

// Remove 2 elements from index 1
const nums1 = [1, 2, 3, 4, 5]
nums1.splice(1,2) // for deleting
console.log(nums1);

// Insert 10 and 20 at index 2
nums1.splice(2, 0, 10, 20)
console.log(nums1);

// 11. Bonus Practice
// Chain map(), filter(), and reduce() to:

// Square all numbers in [1, 2, 3, 4, 5]

// Filter squares > 10

// Then sum them using reduce()

const numSample = [1, 2, 3, 4, 5]
const numSquare = numSample.map(function (value) {
    return value * value
})

console.log("Square", numSquare);

const filterNum = numSquare.filter(function (value) {
    return value > 10
})
console.log("filter", filterNum);

const sum = filterNum.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

console.log("Sum", sum);