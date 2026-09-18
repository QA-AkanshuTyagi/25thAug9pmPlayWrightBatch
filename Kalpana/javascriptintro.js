// variable: to address to any particular value which we assign.
age=18;
a=5;
b=4;
console.log(a+b);


//variable declaration keyword: var, let, const
// define on the basis of two parameters 1. reassign 2. redeclaration
//scope: where can we use, it is two type function and block.


//declaration
var age;

//assigning: to give value to any variable.
var age=19;
//reassigning: to change value 
var age=20; // reassigning

var age=22; // declaration and assignment in a single line.

// redeclaration: var allows declaration but keyword should be same.
var name="kohli";
let name "bumrah"; //error: trying to redeclare by changing keyword.
var name="rohit"; // redeclare
console.log(name) // print: rohit


// let: reassigning allows but redeclaration doesnt.

let numb=18;
let numb=93; // error: when trying to redeclare
var numb=01; //error: trying to redeclare by changing keyword.
numb=45; // reassign
console.log(numb)


// const: doesnt allow to redeclare and reassign
const year= 2026;
console.log(year)
