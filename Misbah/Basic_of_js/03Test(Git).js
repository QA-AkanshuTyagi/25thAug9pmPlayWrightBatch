/* Test questions:
1. Please WAP to print numbers from 1 to 100 in reverse order.
2. Difference between initialization and Declaration. Explain using write program.
3. Diffference between var let const.
4. Types pf operators. Define using program.
5. Command to fetch all remote repositories
6. Comand to fetch all local repo
7. Difference between pull and clone.
8. Do some changes in your local machine and move same code to gut hub
9. Define architecture of git
10. What is branching in git and move any code in subbranch.
11. Define What is merge and pr in git hub  */

// Q No-1 Please WAP to print numbers from 1 to 100 in reverse order.
for (let i = 100; i >= 1; i--) 
    
    {

    console.log(i);}

// Q no-2  Difference between initialization and Declaration. Explain using write program

/*Declaration: Creating a variable without assigning a value.
Initialization: Assigning a value to a variable.*/
// let age;  Declaration
// age = 25; Initialization


// Q no -3 Diffference between var let const
// var is used to declare a variable. It is function-scoped and can be redeclared and reassigned.
// var age = 25;       age = 30;        var age = 35;

// Let is used to declare a variable. It is block-scoped and can be reassigned but not redeclared in the same scope.
// let age = 25;    age = 30;

// const is used to declare a constant variable. It is block-scoped and cannot be reassigned or redeclared.
// const age = 25;   age = 30;  // Error


// Q no- 4 Types pf operators. Define using program

// Arithmetic: (+ - * / %)
/* let a = 10, b = 5;
   console.log(a + b);
   console.log(a * b); */

//Assignment: (= += -= *=)
/* let x = 10;  x += 5;
   console.log(x);

// Comparison: (== === != !== > < >= <=)
   console.log(10 === "10"); // false

// Logical: (&& || !)
   console.log(10 > 5 && 20 > 10); // true */


// Q no-5 Command to fetch all remote repositories
 
/* Fetches updates from all configured remote repositories without changing 
your current working files or automatically merging the changes.*/
// git fetch --all

// Q no-6 Comand to fetch all local repo.



// Q no 7 Difference between pull and clone.

/*(git clone)
Used to copy a remote repository to your local machine.
Normally used when getting the repository for the first time.*/

/*git pull
Used to get the latest changes from a remote repository into an existing local repository.*/

// Q no-8 Do some changes in your local machine and move same code to gut hub

/*git clone https://github.com/user/project.git
cd project
git status
git add .
git commit -m "Updated code"
git push origin main*/

// Q no- 9 Define architecture of git

/* Working Directory
       ↓
Staging Area
       ↓
Local Repository
       ↓
Remote Repository (GitHub) */


// Q no-10  . What is branching in Git? Move code to a sub-branch

/*A branch is an independent line of development that allows you 
to work on code without directly affecting the main branch.*/

// Q no- 11 Define What is merge and pr in git hub

/* Merge: Combining changes from one branch into another branch.
   Pull Request (PR): A request on GitHub to merge changes from one branch into another.
   It allows team members to review, discuss, and approve the code before merging*/