// writng a code to print even number upto 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// writng a code to print odd number upto 50
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

// // writng a code to print prime number upto 50
// for (let num = 2; num <= 50; num++) {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }

// writing a code for factorial of a number
let Number = 5;
let factorial = 1;
for (let i = 1; i <= Number; i++) {
    factorial *= i;
}
console.log(factorial);




// if (true) {
//     var x = 10;
//     let y = 20;
// }
// console.log(x);
// console.log(y);


//Write a program to check whether a number is positive, negative, or zero.
let number = 5;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Write a program to check whether a given number is even or odd.
let num = 7;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}   

// Write a program to find the greatest among three numbers using if-else.
let a = 10;
let b = 20;
let c = 15; 
if (a > b && a > c) {
    console.log("The greatest number is: " + a);
} else if (b > a && b > c) {
    console.log("The greatest number is: " + b);
} else {
    console.log("The greatest number is: " + c);
}


//Write a program to calculate grades based on marks: 90 or above = A, 80–89 = B, 70–79 = C, 60–69 = D, below 60 = Fail.
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}


//What will be the output?
let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


//Q11. Write a program to check whether a year is a leap year.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//Explain the difference between if-else and switch statements.
//IF-else statements are used to execute a block of code based on a condition. 
// It allows for multiple conditions to be checked using else if statements. 
// The syntax is straightforward and is suitable for checking ranges or complex conditions.
//Switch statements are used to execute one block of code among many based on the value of a variable.
//It is more efficient when checking a single variable against multiple possible values. 
// The syntax is cleaner for discrete values but does not handle ranges or complex conditions as easily as if-else statements.


// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Write a program to calculate the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 10 is: " + sum);


// Write a program to print the multiplication table of a given number.
let number1 = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number1 + " x " + i + " = " + (number1  * i));
}

//Q19. What will be the output?
for (let i = 1; i <= 5; i++) {
    console.log(i);
}



//Q24. Write a program to print the following pattern:
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

//Q27. Write a function to add two numbers.
let num1= 10;
let num2= 5;
function addNumbers(num1, num2) {
    return num1 + num2;
}   
console.log(addNumbers(num1, num2)); // Output: 15


//Q28. Write a function to check whether a number is even or odd.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOrOdd(10)); // Output: Even
console.log(checkEvenOrOdd(7));  // Output: Odd 


//Q29. Write a function that accepts three numbers and returns the greatest number.
function findGreatestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }

}
console.log(findGreatestNumber(10, 20, 30)); 
console.log(findGreatestNumber(50, 40, 30)); 

// ssfaiufh


function greet() {
    console.log("Hello World");
}

greet();


//Q31. What is the difference between parameters and arguments?
// Parameters are variables that are defined in the function declaration and act as placeholders for the values that will be passed to the function when it is called.
// Arguments are the actual values that are passed to the function when it is called. 
// In other words, parameters are used in the function definition, while arguments are used in the function call.


//Q32. Write a function that accepts a student's name and marks and prints the student's name along with their grade.
function printStudentGrade(name, marks) {
    let grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else { 
        grade = "Fail";
    }
    console.log("Student Name: " + name + ", Grade: " + grade);
}
printStudentGrade("ANURAG", 85);
printStudentGrade("ABHISHEK", 95);
printStudentGrade("BRAJESH", 75);


//Q33. What is the purpose of the return keyword in JavaScript?
// The return keyword in JavaScript is used to specify the value that a function should output when it is called.
// When a function is called, it can perform some operations and then return a value to the caller using the return statement.
// The returned value can be used in further calculations or stored in a variable for later use.
// If a function does not have a return statement, it will return undefined by default.


//Q34. What is the difference between console.log() and return?
// console.log() is used to print output to the console, which is useful for debugging and displaying information during the execution of a program.
// return is used to send a value back from a function to the caller, allowing the caller to use that value in further computations or logic. 
// While console.log() outputs information for the developer, return provides a way for functions to communicate results to other parts of the code.


//Q35. What will be the output?
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

//Q36. What will be the output?
function calculate() {
    console.log("Hello");
    return 100;
    console.log("Welcome");
}

let result1 = calculate();
console.log(result1);

//Q37. Write a function that returns the square of a number.
function square(num) {
    return num * num;
}
let numb = 5;
console.log(square(numb));   


//Q38. Write a function that accepts an array of numbers and returns the total sum.
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4, 5]));


//Q39. Identify the error or explain the behavior:
function test() {
    return;
    console.log("Hello");
}

test();
// The function test() has a return statement before the console.log("Hello") statement.
// As a result, the function will exit immediately when it encounters the return statement, and the console.log("Hello") statement will never be executed.
// Therefore, when test() is called, it will return undefined and nothing will be printed to the console.



//Q40. What is exception handling? Why do we use it?
// Exception handling is a programming construct that allows developers to manage and respond to runtime errors or exceptional conditions that may occur during the execution of a program.
// We use exception handling to improve the robustness and reliability of our code by gracefully handling errors, preventing crashes, and providing meaningful feedback to users or developers.
// It allows us to separate error-handling logic from regular code flow, making the code cleaner and easier to maintain.


// Q41. Explain the purpose of try, catch, finally, and throw.
// The purpose of try, catch, finally, and throw in exception handling is as follows:
// try: The try block is used to wrap the code that may potentially throw an exception. It allows us to test a block of code for errors without crashing the program.
// catch: The catch block is used to handle exceptions that are thrown in the try block. It allows us to define how to respond to specific errors and provides access to the error object, which contains information about the exception.
// finally: The finally block is optional and is used to execute code that should run regardless of whether an exception was thrown or not. It is typically used for cleanup operations, such as closing files or releasing resources.
// throw: The throw statement is used to create and throw custom exceptions. It allows developers to signal that an error has occurred and can be caught by a catch block for handling.



//Q42. What will be the output?
try {
    console.log("Start");
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Execution completed");
}


// // Q49. Define the following data types in TypeScript with examples: number, string, boolean, any, and void.
// let num9: number = 10;
// let str: string = "Hello, TypeScript!";
// let isTrue: boolean = true;
// let anything: any = 5;
// anything = "Now I'm a string";
// function doSomething(): void {
//     console.log("This function doesn't return anything");
// }

// // Q50. Identify the error in the following code:
// let age: number = 25;
// age = "Twenty Five";

// console.log(age);
// // The error in the code is that we are trying to assign a string value ("Twenty Five") to a variable (age) that has been declared with the type number.


// // Q51. Write a TypeScript function to add two numbers with proper type annotations.
// function addNumbers(a: number, b: number): number {
//     return a + b;
// }
// let sum1 = addNumbers(5, 10);
// console.log(sum1); 


// // Q54. Write a function that accepts a string and returns its length.
// function getStringLength(str: string): number {
//     return str.length;
// }
// let length = getStringLength("Anurag Tripathi");
// console.log(length); 