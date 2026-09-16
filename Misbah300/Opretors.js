/* Aritmatic opretor
let a = 15
let b = 20
Console.log(a+b)
Console.log(a-b)
Console.log(a*b)
Console.log(a/b)
Console.log(a%b) */


//Datatypes in javascript
//Number, String, Boolean, Null- Empty_Unknown value, Undefined- No value
// Type coercion basics- Loosely typed, convert types automatically in many cases
//Examples
// 5+3.2=> 8.2n
// 5 is int and 3.2 is float, output will be in float
//"5"-3=> 2
//"5" is string and 3 is int, output will be in int
// "5"+3=> 53
//"5" is string and 3 is int because string concitate so it will take both value as string
// output will be 53
//true+1
//true is boolean and 1 is number, true holds the value as 1 so the output will be 2
// False+5
//False is boolean and 5 is number, False holds the value as 0 so the output will be 5
//"3"-true
//"3" is string and true is boolean, true holds the value as 1 so the output will be 2
//"3"+true
// "3" is string and true is boolean because string concitate so it will take both value as
//string and output will be 3true

console.log("5"-3);
console.log("5"+3);
console.log(true+1);
console.log(false+5);
console.log("3"-true);
console.log("3"+true);
console.log(true+"3");
            
// declare variables and check their types using typesof
let age= 30;
console.log(typeof age); //output-number
const name= "Tauret";
console.log(typeof name); // output- string

// Type coercion & strict vs loose equality in JS
// Concept demonstrated
// 1. strict equality(===)
// :- checks both value and type
// :- No automatic type conversion
// :- "5" === 5 => False (string not equal to number)

// 2. Loose equality(==)
// :- check value only
// :- JS automatically converts types before comparing
// :- "5" == 5 => true (string "5" is converted to number 5)
// Examples

if ("5"===5)
{
    console.log("values match");
}
else{
    console.log("values match but not type");
}

if("5"==5)
{
    console.log("== doesn't check type value match");
}
else{
    console.log("=== checks type also, values match but not type");
}

