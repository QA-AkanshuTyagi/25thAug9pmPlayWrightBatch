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
