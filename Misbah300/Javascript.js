// variables is a name given to a memory location use to store data
let age=25;
console .log(age);
// age is variable name
// 25 is value
// Variable keywords used in javascript var let and const

// var- it allows redeclaration and reassign
//function scope- used inside the whole function
// Ex reassign
var x= 100;
console.log(x);
x= 200;
console.log(x);

// Ex Redeclare
var y= 100;
console.log(y);
var y= "Hello";
console.log(y);

// function scope examnple
function display()
{
    var z= 10;
    console.log(z);
}
display();
//console.log(z);

// let- Reassign allowed but Redeclare not allowed
// Reassign ex
let a= 20;
a= 30;
console.log(a); //output-30
// redeclare ex
let b= 45;
//let b=50;
console.log(b); // output- will get Identifier 'b' has already been declared error

// block scope ex
if (true)
{
    let num= 50;
    console.log(num);
}
//console.log(num); //output- will get num is not defined because outside block not accesseble

// const- reassign and redeclarartion not allowed
//reassign ex
const pi= 3.14;
//pi= 5.2;
console.log(pi);
// redeclaration ex
const o2= "oxygen";
//const o2= "carbon";
console.log(o2);


