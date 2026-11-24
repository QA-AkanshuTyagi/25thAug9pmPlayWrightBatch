//Q49. Define the following data types in TypeScript with examples: number, string, boolean, any, and void.
let num9: number = 10;
let str: string = "Hello, TypeScript!";
let isTrue: boolean = true;
let anything: any = 5;
anything = "Now I'm a string";
function doSomething(): void {
    console.log("This function doesn't return anything");
}

// Q50. Identify the error in the following code:
let age: number = 25;
age = "Twenty Five";

console.log(age);
// The error in the code is that we are trying to assign a string value ("Twenty Five") to a variable (age) that has been declared with the type number.


// Q51. Write a TypeScript function to add two numbers with proper type annotations.
function addNumb(a: number, b: number): number {
    return a + b;
}
let sum1 = addNumb(5, 10);
console.log(sum1); 


// Q54. Write a function that accepts a string and returns its length.
function getStringLength(str: string): number {
    return str.length;
}
let totallength = getStringLength("Anurag Tripathi");
console.log(totallength); 