// variable declaration keywords:var, let, const
//parameters: scope, reassigning , redeclaration

// assigning:declaration
// reassigning:redeclaration

// in "var" we can reassign and redeclare

var age=30; // assign
var age=31; // redeclaration
age=32 //reassigning
console.log(age);


//in "let" we can reassign but we cannot redeclare

let age1=40;
// let age1=41; we can not redeclare
age1=41
console.log(age1);

const age2=50;
// const age2=51; we cannot redeclare
// age2=52; we cannot reassign
console.log(age2)

