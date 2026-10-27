// writng a code to print even number upto 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// writng a code to print odd number upto 50
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

// writng a code to print prime number upto 50
for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// writing a code for factorial of a number
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);

