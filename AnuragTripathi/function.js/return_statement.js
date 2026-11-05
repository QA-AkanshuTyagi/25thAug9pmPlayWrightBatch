// return statement:
// The return statement is used to specify the value that a function should return when it is called. 
// It can be used to return a value from a function, and it can also be used to exit a function early. 
// If no return statement is specified, the function will return undefined by default.
// for example:
function exampleFunction() {
    return "Hello, World!";
}
const result = exampleFunction();
console.log(result); // Output: Hello, World!

//another example:
function addNumbers(a, b) {
    return a + b;
}
const sum = addNumbers(5, 10);
console.log(sum); // Output: 15