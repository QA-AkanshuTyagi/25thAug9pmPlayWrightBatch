// Arrow:
// Arrow functions are a concise way to write functions in JavaScript. 
// They are often used for short, single-expression functions and have a different behavior for the `this` 
// keyword compared to traditional function expressions.

//example:

const functionName = (parameter1, parameter2) => {
  const add = (a, b) => a + b;
  return add(parameter1, parameter2);
};
const result = functionName(5,3);
console.log(result); // Output: 8               


//another example:
var multiply = (a, b) => a * b;
console.log(multiply(7, 3)); // Output: 21