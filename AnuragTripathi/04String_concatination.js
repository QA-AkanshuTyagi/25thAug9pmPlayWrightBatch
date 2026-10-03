// String concatenation means joining two or more strings together to form a single string. 
// In JavaScript, you can concatenate strings using the `+` operator and many more ways

// data type of string is string.
// 1- number data type.
// 2- string data type.
// 3- boolean data type.
// 4- null data type.
// 5- undefined data type.

let a = 132
let b= "Anurag"
let c = true
let d = false
let e = "abc"
let f = 121.21
let g = null
let h ;

// Different ways to concatenate strings in JavaScript:

// 1- Using the + operator:
console.log(b+" is a good "+"man");

// 2- Using the comma method which will add space between the strings:
console.log(b,"is a good","man");

// 3- Using the backticks method:
console.log(`${b} is a good man ${a} is a number. ${c} is a boolean. ${d} is a boolean. ${e} is a string. ${f} is a float. ${g} is null. ${h} is undefined.`);

// backticks will be used with ${} to insert variables and expressions into the string.
// and the values should be under ' ' single quotes .


console.log(`The value of a is ${a} and the value of b is ${b}. The sum of a and f is ${a + f}. The value of c is ${c}. The value of d is ${d}. The value of e is ${e}. The value of g is ${g}. The value of h is ${h}.`);
