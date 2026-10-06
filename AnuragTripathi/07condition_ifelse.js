// If Else Statement
// If the condition is true, then the code inside the if block will execute
// If the condition is false, then the code inside the else block will execute

let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// If Else If Statement:-

// If the first condition is true, then the code inside the if block will execute
// If the first condition is false, then the code inside the else if block will execute
// If both conditions are false, then the code inside the else block will execute

let marks = 30;

if (marks >=90){
    console.log("You got A grade.");
} else if (marks >=70) {
    console.log("You got B grade.");
} else if (marks >=60) {
    console.log("You got C grade.");
} else if (marks >=40){
    console.log("You got D grade.");
} else {
    console.log("fail");
} 



// Nested If Else Statement:-

// If the first condition is true, then the code inside the if block will execute
// If the first condition is false, then the code inside the else block will execute
// If the second condition is true, then the code inside the nested if block will execute
// If the second condition is false, then the code inside the nested else block will execute

let number = 10;

if (number > 0) {
    console.log("The number is positive.");
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}