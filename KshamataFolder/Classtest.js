// JAVASCRIPT & TYPESCRIPT TEST PAPER
// Student Name: __________kshamata sharma____________________    Date: ______________

// Section 1: Variable Declaration – var, let, and const
// Q1. Explain the difference between var, let, and const in JavaScript.
// Answer:

//  In javascript, these are three type of keywords which are used to declare variablies, but with the different behaviors and purposes. 

//  a) var: var is the  function scoped variable declration keyword.It can be re-declared and updated within its scope.
// b) Let: Let is the block scoped variable declaration keyword. It can be updated but not re-declared within its scope. 
// c) Const: Const is also a block scoped variable declaration keyword. However, it cannot be updated or re-declared within its scope. 
// It is used to declare variables that are meant to remain constant throughout the program.

// example:

var age = 20;
age = 25;
console.log(age); 

let marks = 80;
marks = 90;
console.log(marks); 

const name = "Rahul";
console.log(name);


// Q2. What will be the output of the following code?
var a = 10;
let b = 20;
const c = 30;

a = 15;
b = 25;
c = 35;

console.log(a);
console.log(b);
console.log(c);
// Answer:


// Q3. Identify the error in the following code:
// const name = "Rahul";
// name = "Amit";

// console.log(name);
// Answer:

// The error in the code is that we are trying to reassign a value to a constant variable 'name'. 
// In Javascript , once a variable is declared using 'const' keyword,its value cannot be changed or reassigned. 
// 
// Q4. What is the difference between block scope and function scope? Explain with an example.

// Answer:

// Block Scope: A variable declared with let or const is accessible only inside the block {} where it is declared.
// Function Scope: A variable declared with var is accessible throughout the entire function where it is declared.

// Example:

function test(){
    if (true) {
        var a = 10;
        let b = 20;
    }
   console.log(a);
   console.log(b); // This will throw an error because b is block scoped
}

// Q5. What will be the output?
// if (true) {
//     var x = 10;
//     let y = 20;
// }

// console.log(x);
// console.log(y);

// Section 2: Conditional Statements

// Answer:

if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); 

console.log(y); // This will throw an error because y is block scoped.


// Q6. Write a program to check whether a number is positive, negative, or zero.

let number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Q7. Write a program to check whether a given number is even or odd.

// Answer:
 let num = 4;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
 }


// Q8. Write a program to find the greatest among three numbers using if-else.

// Answer:

let d = 10,
  e = 20,
 f = 30;
 if (d > e && d > f) {
    console.log("d is the greatest");
} else if (e > d && e > f) {
    console.log("e is the greatest");
} else {
    console.log("f is the greatest");
}
// Greatest number will be printed as f because it is greater than both d and e.

// Q9. Write a program to calculate grades based on marks: 90 or above = A, 80–89 = B, 70–79 = C, 60–69 = D, below 60 = Fail.

// Answer:
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade: C");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}
// Grade B will be printed because the marks are between 80 and 89.


// Q10. What will be the output?
// let age = 20;
// if (age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// Answer:
let age = 20;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// Eligible will be printed because the age is greater than or equal to 18.

// Q11. Write a program to check whether a year is a leap year.
// Answer:


// Q12. Explain the difference between if-else and switch statements.
// Answer:


// Section 3: Loops
// Q13. Explain the difference between for, while, and do-while loops.
// Answer:
// For Loop: A for Loop is used when the number of iterations is known. 
// It consists of three parts: initialization, condition, and increment/decrement.

// While Loop: A while loop is used when the number of iterations is not known. 
// but it continues to execute as long as the specified condition is true.

// Do-While Loop: A do-while loop is similar to a while loop, 
// but it guarantees that the loop body will be executed at least once, even if the condition is false.

// Q14. Write a program to print numbers from 1 to 10 using a for loop.
// Answer:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q15. Write a program to print even numbers from 1 to 50.
// Answer:

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}       


// Q16. Write a program to print odd numbers from 1 to 100.
// Answer:

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Q17. Write a program to calculate the sum of numbers from 1 to 10.
// Answer:

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


// Q18. Write a program to print the multiplication table of a given number.
// Answer:

let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// Q19. What will be the output?

 for (let i = 1; i <= 5; i++) {
     console.log(i);
}

//Answer: The output will be:
1
2
3
4
5 
// Q20. What will be the output?
 let i = 1;

 while (i <= 5) {
     console.log(i);
     i++;
 }

//  Answer: The output will be:
1
2   
3
4
5   
 
// Q21. What is the difference between break and continue? Demonstrate with an example.
// Answer:
// Break: The break statement is used to exit a loop or switch statement prematurely,
// and it terminates the entire loop or switch statement.   
// Continue: The continue statement is used to skip the current iteration of a loop and move on to the next iteration.  
// Example:
for (let i = 1; i <= 10; i++) {
    if (i === 5) {  
        break;
    }
    console.log(i);
}       

// Q22. Write a program to reverse a number using a loop. Example: Input 12345, Output 54321.
// Answer:

// Q23. Write a program to calculate the factorial of a number. Example: Input 5, Output 120
// Answer:


// Q24. Write a program to print the following pattern:
// *
// **
// ***
// ****
// *****

// Answer:

for (let i = 1; i <= 5; i++) {
    let pattern = '';   
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Section 4: Functions
// Q25. What is a function? Explain why functions are used in JavaScript.

// Answer: A function is a block of reusable code that performs a specific task. 
// Functions are used in JavaScript to organize code, improve readability, and promote code reusability.
// They allow developers to encapsulate logic, making it easier to maintain and debug code. 
// Functions can accept parameters, return values, and can be called multiple times throughout a program, 
// reducing redundancy and enhancing modularity.


// Q26. Explain the difference between function declaration, function expression, and arrow function.
// Answer:
// Function Declaration: A function declaration defines a named function using the 'function' keyword.
// Example:
function add(a, b) {
    return a + b;
}
// Function Expression: A function expression defines a function as an expression and can be assigned to a variable.
// Example:
let subtract = function(a, b) {
    return a - b;
};
// Arrow Function: An arrow function is a shorter syntax for defining functions and does not have its own 'this' context.
// Example:
let multiply = (a, b) => {
    return a * b;
};  

// Q27. Write a function to add two numbers.
// Answer:

function addNumbers(a, b) {
    return a + b;
}

// Q28. Write a function to check whether a number is even or odd.
// Answer:
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}   

// Q29. Write a function that accepts three numbers and returns the greatest number.
// Answer:

function findGreatest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}       

// Q30. What will be the output?
// function greet() {
//     console.log("Hello World");
// }

// greet();

// Answer: The output will be "Hello World" because the greet function is called, which executes the console.
// log statement inside it.


// Q31. What is the difference between parameters and arguments?
// Answer: Parameters are the variables defined in the function declaration or definition,
// while arguments are the actual values passed to the function when it is called. 
// Parameters act as placeholders for the values that will be provided during function invocation, 
// allowing functions to be more flexible and reusable. 


// Q32. Write a function that accepts a student's name and marks and prints the student's name along with their grade.
// Answer:


// Section 5: return Keyword
// Q33. What is the purpose of the return keyword in JavaScript?
// Q34. What is the difference between console.log() and return?
// Q35. What will be the output?
// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);
// console.log(result);
// Q36. What will be the output?
// function calculate() {
//     console.log("Hello");
//     return 100;
//     console.log("Welcome");
// }

// let result = calculate();
// console.log(result);
// Q37. Write a function that returns the square of a number.
// Q38. Write a function that accepts an array of numbers and returns the total sum.
// Q39. Identify the error or explain the behavior:
// function test() {
//     return;
//     console.log("Hello");
// }

// test();
// Section 6: Exception Handling
// Q40. What is exception handling? Why do we use it?
// Q41. Explain the purpose of try, catch, finally, and throw.
// Q42. What will be the output?
// try {
//     console.log("Start");
//     let result = 10 / 0;
//     console.log(result);
// } catch (error) {
//     console.log("Error occurred");
// } finally {
//     console.log("Execution completed");
// }
// Q43. Identify the error in the following code. Is this code valid JavaScript? Explain.
// try {
//     let result = 10;
//     console.log(result);
// } catch {
//     console.log("Error");
// }
// Q44. Write a program to handle an error when a user tries to divide a number by zero.
// Q45. Write a program using throw to throw an error if the user's age is less than 18.
// Q46. What is the difference between a syntax error and a runtime error?
// Q47. What will be the output?
// try {
//     let arr = [10, 20, 30];
//     console.log(arr[5].toString());
// } catch (error) {
//     console.log("Something went wrong");
// } finally {
//     console.log("Finally executed");
// }
// Section 7: TypeScript Fundamentals
// Q48. What is TypeScript? How is it different from JavaScript?
// Q49. Define the following data types in TypeScript with examples: number, string, boolean, any, and void.
// Q50. Identify the error in the following code:
// let age: number = 25;
// age = "Twenty Five";

// console.log(age);
// Q51. Write a TypeScript function to add two numbers with proper type annotations.
// Q52. What is the difference between any and unknown?
// Q53. What is the purpose of void in TypeScript?
// Q54. Write a function that accepts a string and returns its length.
// Q55. Write a function that accepts two numbers and returns their multiplication.
// Section 8: Practical Coding Questions
// Q56. Write a program to find the sum of all even numbers between 1 and 100.
// Q57. Write a program to count the number of digits in a given number.
// Q58. Write a program to check whether a number is a palindrome. Example: Input 121, Output Palindrome.
// Q59. Write a program to check whether a given number is prime or not.
// Q60. Write a function that accepts an array of numbers and returns the largest number.
// Q61. Write a program to print the following pattern:
// 1
// 12
// 123
// 1234
// 12345
// Q62. Write a program to calculate the sum of digits of a number. Example: Input 1234, Output 10.
// Q63. Write a function to check whether a string is a palindrome. Example: madam → Palindrome.
// Q64. Write a program that accepts a number and prints its multiplication table from 1 to 10.
// Q65. Write a program to find the second-largest number in an array.
// Test Evaluation
// Section
// Topic
// Suggested Marks
// 1
// Variable declarations
// 10
// 2
// Conditions
// 15
// 3
// Loops
// 20
// 4
// Functions
// 15
// 5
// Return keyword
// 10
// 6
// Exception handling
// 15
// 7
// TypeScript
// 15
// 8
// Practical coding
// 20
// Total


// 120


