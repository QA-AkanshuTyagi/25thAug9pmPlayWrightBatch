//parameterised function:

function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 10)); // Output: 50

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed.
console.log(divide(10, 2)); // Output: 5
