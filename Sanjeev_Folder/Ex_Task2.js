//  Printing prime numbers between 1-100.

//  Prime numbers are numbers that are greater than 1 and have no divisors other than 1 and themselves.


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