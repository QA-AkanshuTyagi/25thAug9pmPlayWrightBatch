


// Even and Odd Number Practice.
// 1 to 100 even and odd number .
 

//Even number.

 for (let i= 1; i<=100; i++) {
    if (i % 2 === 0) {
        console.log (i);
 }
}

// Odd number.

for (let i= 1; i<=100; i++) {
    if (i % 2 !== 0) {
        console.log (i);
 }
}

// Now check the prime number between 1 to 100.

for (let i = 2; i <= 100; i++) { 
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

