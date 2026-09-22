// variable declaration keywords: var, let, const


// assigning,declaration
// reassigning,redeclaration

// In "var" can reassign and redeclare

var x=10; // assigning
var x=11; // redeclaration
    x=12 //reassigning
console.log(x);


//In "let" can reassign but cannot redeclare

let x1=20;
// let x1=21; can not redeclare
    x1=22
console.log(x1);

const x2=30;
// const x2=31; cannot redeclare
// x2=32; cannot reassign
console.log(x2);