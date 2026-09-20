//  1. Please WAP to print numbers from 1 to 100 in reverse order.

console.log("Sanjeev Kumar Sharma");

for (let i=100; i>=1; i--) {       //   Condition of Printing 1-100 numbers in reverse order

console.log(i);
}



//  2. Difference between initialization and Declaration. Explain using write program.


// let age;  // create a variable this is called declaration;

// age=25;   // Giving a variable its first value this is called initialization

// console.log(age);  // printing the value of variable




//  3. Difference between var let const.

    //:- It can be Reassigned and Redeclared.
    var age=25;
    var age=26;  // redeclaration     
    age=27;      // reassignment
console.log(age);

    //:- It can be Reassigned but cannot be Redeclared.
    let age1=28;
    // let age1=29;  // redeclaration not allowed        
    age1=30; // reassignment allowed
console.log(age1);

    //:- It cannot be Reassigned and cannot be Redeclared.
    const age2=34;
    // const age2=35;  // redeclaration not allowed
    // age2=36; // reassignment not allowed
console.log(age2);



//  4. Types of operators. Define using program.

    //  1. Arithmetic Operators
    let a=13;
    let b=12;
    console.log("Addition: "+(a+b));
    console.log("Subtraction: "+(a-b));
    console.log("Multiplication: "+(a*b));
    console.log("Division: "+(a/b));
    console.log("Modulus: "+(a%b));

        //  2. Assignment Operators

    console.log(a+=b);    // Addition Assignment
    console.log(a-=b);     // Subtraction Assignment
    console.log(a*=b);    // Multiplication Assignment
    console.log(a/=b);    // Division Assignment
    console.log(a%=b);    // Modulus Assignment
    // now the updated value of a is 1 and b is 12.

    // 3. Comparison Operators
    // Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

    a=25; // reassigning the value of a to 25

    console.log(a==b); 
    console.log(a===b);
    console.log(a!=b);
    console.log(a!==b);
    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
console.log(a<=b);


//  5. Command to fetch all remote repositories

    //git branch -r



//  6. Command to fetch all local repositories

   //git branch -a




//  7. Difference between pull and clone.

    //  Clone: It is used to copy the entire folder into local machine. (Command: git clone <past-url>)

    //  Pull: It is used to update all updated or changes codes. (Command: git pull .)



//  8. Do some changes in your local machine and move same code to git hub

    // console.log("I am Sanjeev"); // in previous

    console.log("I am Sanjeev Kumar Sharma"); // in current

        //  git add . 
        //  git commit -m "Update message"
        //  git push .   (pu)
        




//  9. Define architecture of git
    //  git status  (For checking the status of the repository)
    // git add .    (For adding the changes to the staging area)
    // git commit -m "message"  (For committing the changes to the local repository)
    // git push .  (For pushing the changes to the remote repository)




//  10. What is branching in git and move any code in subbranch.
    // Branching is creating a separate copy of your code where you can make changes without affecting the main code.
    // Command: (git branch -u origin local_branch_name:remote_branch_name)




//  11. Define What is merge and pr in git hub

    // Merge: It is used to combine the changes from one branch to another branch. (Command: git merge <branch_name>)

    // PR: It is used to request the changes from one branch to another branch. (Command: git pull-request <branch_name>)