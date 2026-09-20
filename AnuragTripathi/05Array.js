// Array : To store multiple values in a single variable.
let fruits = ["Apple", "Banana", "Orange"];

// here the index of Apple is 0, Banana is 1, Orange is 2.

// To access the values of an array, we can use the index of the array.
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange   

// command to check the length of an array.

console.log(fruits.length); // the length of the array is 3.

// using "for loop" to access the values of an array.

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// using "for of loop" to access the values of an array.

for (let fruit of fruits) {
    console.log(fruit);
}
