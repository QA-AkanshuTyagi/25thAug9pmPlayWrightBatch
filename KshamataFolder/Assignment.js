//Test questions:

//-1 Please WAP to print numbers from 1 to 100 in reverse order.
//-2 Difference between initialization and Declaration. Explain using write program.
//-3. Diffference between var let const.
//-4. Types pf operators. Define using program.
//-5. Command to fetch all remote repositories
//-6. Comand to fetch all local repo
//-7. Difference between pull and clone.
//-8. Do some changes in your local machine and move same code to gut hub
//-9. Define architecture of git
//-10. What is branching in git and move any code in subbranch.
//-11. Define What is merge and pr in git hub  *



Answer:


//-1 for (let i = 100; i >= 1; i--) {
// console.log(i);
// }
 for (let i = 100; i >= 1; i--) {
    console.log(i);

 }

//-2 Initialization is the process of assigning a value to a variable at the time of declaration, 
// while declaration is the process of defining a variable without assigning a value to it.
//example:
// Declaration
let u;
//Initialization
u = 30;
console.log(u);



//declaration key words: var, let, const.


//-3.  var is function-scoped, let and const are block-scoped.
// var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared.
//example:
var a = 10;
var a = 20; // re-declaration is allowed
console.log(a); // Output: 20   
let b = 30;
b = 40; // updating is allowed
console.log(b);     

let c = 50;
// c = 60; // updating is not allowed, will throw an error
console.log(c); // Output: 50   

//-4 Types of operators: Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary, etc.
//example:
let x = 10;
let y = 5;
// Arithmetic operators

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division

// Assignment operators

let z = 10;
z += 5; // z = z + 5
console.log(z); // Output: 15   

// Comparison operators

console.log(x > y); // Greater than(value comparison)
console.log(x < y); // Less than(value comparison)
console.log(x == y); // Equal to(value comparison)
console.log(x != y); // Not equal to(value comparison)
console.log(x === y); // Strict equal to (value and datatype)
console.log(x !== y); // Strict not equal to(value and datatype)
console.log(x >= y); // Greater than or equal to(value comparison)
console.log(x <= y); // Less than or equal to(value comparison)

// Logical operators

console.log(!(x > y)); // Logical NOT(value comparison)
console.log(x > y && x < 20); // Logical AND(value comparison)
console.log(x > y || x < 5); // Logical OR(value comparison)


//-5 Command to fetch all remote repositories


//-6 Command to fetch all local repositories




//-7 Difference between pull and clone.

// Pull is used to fetch and merge changes from a remote repository to your local repository, 
// while clone is used to create a copy of a remote repository on your local machine.


//-8 Do some changes in your local machine and move same code to GitHub

// Steps:
// 1. Make changes in your local code.
// 2. Use `git add .` to stage the changes.
// 3. Use `git commit -m "Your commit message"` to commit the changes.
// 4. Use `git push origin branch-name` to push the changes to GitHub.

//-9 Define architecture of git

// Git architecture consists of three main components:

// 1. Working Directory: The files you are currently working on.
// 2. Staging Area (Index): A place where you can stage changes before committing them.
// 3. Git Directory (Repository): Where Git stores the metadata and object database for your project.



//-10 What is branching in git and move any code in subbranch.

// Branching in Git allows you to create a separate line of development in your project. 
// You can create a new branch, make changes, and then merge it back into the main branch.
// Steps to create a subbranch and move code:

// 1. Create a new branch: `git branch subbranch-name`
// 2. Switch to the new branch: `git checkout subbranch-name`
// 3. Make changes in the code.
// 4. Stage and commit the changes: `git add .` and `git commit -m "Your commit message"`
// 5. Push the branch to remote: `git push origin subbranch-name`


//-11 Define What is merge and pr in git hub

// Merge in Git is the process of combining changes from different branches into a single branch. 
// It allows you to integrate changes made in one branch into another branch.

// PR (Pull Request) in GitHub is a feature that allows you to notify team members about changes you've pushed to a branch in a repository.



