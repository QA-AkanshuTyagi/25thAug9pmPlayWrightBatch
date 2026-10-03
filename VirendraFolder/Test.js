//1. Please WAP to print numbers from 1 to 100 in reverse order.
for(let i=100;i>=1;i--)
    {
        console.log(i);
    }

//2. Difference between initialization and Declaration. Explain using write program. 
//Declaration:- Creating the variable name and reserving space in memory. example ...let age;
//Initialization:-Assigning an initial value to that declared variable for the first time. example..let age=18;

let age=18;
{
console.log(age);
}

//3. Diffference between var let const. 

//Var- It is globally or function-scoped. Var can reassign and redeclare.
//Let- Declares a block-scoped variable that can be updated or reassigned later.
//Const- Declares a block-scoped block that cannot be reassigned. It must be assigned a value immediately when declared.

//4. Types of operators. Define using program. 
// 1)- Arithmetic operators
// 2)- Assignment operators
// 3)- Comparison operators
let a=10;
let b=11;
console.log(a+b)
console.log(b-a)
console.log(a*b)
console.log(b/a)
console.log(b%a)
console.log(a**b)
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b); 
console.log(a==b); 
console.log(a===b);
console.log(a!=b);
console.log(a!==b); 
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);


//5. Command to fetch all remote repositories 
//git branch -a
//git fetch --all

//6. Comand to fetch all local repositories
// git branch

//7. Difference between pull and clone. 
//Clone- clone is an exact local copy of a remote repository downloaded to computer.
//Pull-pull is a Git command used to download changes from a remote repository

//8. Do some changes in your local machine and move same code to git hub 
//console.log("Hello World!");
//After Change
//console.log("Hello World! I am Virendra");
 
//git status
//git add .
//git status
//git commit -m"moving my new updated code"
//git push -u origin Virendra_Branch:Virendra_Branch
//git pull


//9. Define architecture of git 
//a)Local Machine
//b)Local Repository
//c)Staging
//d)Remote Repository


//10. What is branching in git and move any code in subbranch. 
//Branching is a Concept in which we used to create a new branch through which we can just directly move our code instead of moving indirectly to main branch we used to move it over to our sub branch.

//11. Define What is merge and pr in git hub
//Merge- Combine all branch code to main 
//Pr- PR stands for Pull Request. It is a formal request to merge code changes from one branch into another(main).