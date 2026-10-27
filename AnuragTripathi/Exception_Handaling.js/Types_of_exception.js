//Exception handling in javascript.
//There are mainly two types of exceptions in javascript
//1. Syntax Error or Compile time error
//2. Runtime Error

//1- Syntax Error or Compile time error:-
//for example, if we write a code like this
// let a =10 ;
// console.log(a);
// // This code will give a syntax error because we have not used
//  semicolon at the end of the first line.

//2- Runtime Error:-
    //1- typeError:-
    //for example, if we write a code like this
    // let b = null;
    // console.log(b.name);
    // This code will give a type error because we are trying
    //  to access a property of null which is not possible.

    //2- RangeError:-
    //for example, if we write a code like this
    //let c = new Array(5);
    // console.log(c[-5]);
    // This code will give a range error because we are trying to access
    //  an index which is out of range.

    //3- ReferenceError:-
    //for example, if we write a code like this
    //console.log(d);
    // This code will give a reference error because we are trying to access
    //  a variable which is not defined.



// How to handle exceptions in javascript?

// We can handle exceptions in javascript using try-catch block.
// The try block contains the code which may throw an exception.
// The catch block contains the code which will be executed if an exception is 
// thrown in the try block.
   
try {
    console.log(y);
}
catch(error){
    console.log(error.message);
}
console.log(10);


