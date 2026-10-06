// Break
// The break statement is used to stop the loop at given conditon.
// In this example, the loop will stop when i is equal to 5.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("Loop has been broken at i = 5");

// Continue
// The continue statement is used to skip the current iteration of the loop and move to the next iteration.
// In this example, the loop will skip the iteration when i is equal to 5.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
