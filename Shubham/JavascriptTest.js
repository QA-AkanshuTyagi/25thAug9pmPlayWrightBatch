console.log("Shubham");

1//Program to print numbers from 1 to 100 in reverse order
for (let i = 100; i >= 1; i--) {
    console.log(i); 
}

2//Declaration: JavaScript engine that a variable exists (allocating a name for it in memory).

//Initialization: Assigning an initial value to that variable for the first time.


let myVar;        // 1. Declaration (value is undefined)
myVar = 50;       // 2. Initialization (assigning the first value)

let total = 100;  // Declaration and initialization done together
3// Difference between var, let, and const
//Feature                    var             let               const    
//Scope                     Function        Block             Block
//Hoisting                  Yes             Yes               Yes
//Re-declaration             Yes             No                No
//Re-assignment              Yes             Yes               No

4//Types of Operators arithmetic, assignment, comparison, logical, and ternary operators.

// 1. Arithmetic Operators
let sum = 10 + 5; 
let product = 4 * 2;

// 2. Assignment Operators
let x = 10;
x += 5; // x = x + 5; (now x is 15)

// 3. Comparison Operators
let isEqual = (5 === "5"); // false (strict equality, checks both value and type)

// 4. Logical Operators
let check = (true && false); // false (logical AND operator)


console.log({ sum, x, isEqual, check, });

5//Command to fetch all remote repositories
//git fetch --all

6//Command to fetch all local repositories
//git fetch --all

7//Difference between git pull and git clone
//git pull: Updates the local repository with changes from the remote repository. It fetches and merges changes into the current branch.
//git clone: Creates a copy of a remote repository on your local machine. It downloads the entire repository, including its history and branches.

8//Architecture of Git
//Git architecture consists of four(4) main components: the working directory, the staging area (index), Git repository (local repository) and the Remote repository.

9//Branching in Git
//(Branching) in Git allows developers to create separate lines of development within a repository.
//  Each branch can have its own set of changes, enabling multiple features or bug fixes to be developed simultaneously without affecting the main codebase. 

10//Subbranching in Git
//Subbranching in Git refers to creating a branch from an existing branch rather than from the main branch (usually master or main).     

11//Merge in Git
//Merging in Git is the process of integrating changes from one branch into another. 

//Pull Request (PR) is a feature in Git that allows developers to propose changes from one branch to be merged into another branch, typically the main branch.

console.log("Shubham");
