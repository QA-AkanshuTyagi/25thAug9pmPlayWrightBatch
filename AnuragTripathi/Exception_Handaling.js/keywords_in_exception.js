// there are some keywords which are used in exception handling in javascript. 
// Throw and throws.
//  these keywords are used to handle exceptions in javascript.

//A- Throw:-
// to throw explicitly message or error we can use throw keyword in javascript.
// for example, if we write a code like this

let browser = "chrome";
if(browser == "chrome"){
    console.log("This is chrome browser");
}
else if(browser == "firefox"){
    console.log("This is firefox browser");
} 
else if(browser == "safari"){
    console.log("This is safari browser");
}
else{
    throw new Error("Invalid browser");
}
console.log("i am the best");


//B- Throws:-
// throws keyword is used to declare an exception in javascript.
// for example, if we write a code like this

let a = -10;
function checkNumber(num){
    if(num < 0){
        throw new Error("Number cannot be negative");
    }
    return num;
}   
console.log(checkNumber(a));
