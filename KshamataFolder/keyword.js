// keywords:- Break and continue.
//Break statement is used to terminate the loop or switch statement and transfer control to the statement immediately following the loop or switch.
//Continue statement is used to skip the current iteration of the loop and transfer control to the next iteration of the loop.



// now we will see the example of break and continue statement in javascript.
// Example of break statement
// In this example, we will use a for loop to iterate through numbers from 1 to 10. When the loop reaches the number 5, we will use the break statement to exit the loop.
for (let i = 1; i <= 10; i++){
       if (i === 5) {
              break;
       }
       console.log(i);

       }    
       for (let i = 1; i <= 10; i++){
                if (i === 5) {
                    continue;
                }
                console.log(i);
            }
            