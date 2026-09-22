// 1)- printing 1 to 100 in reverse order using for loop
for(let i=100; i>=1; i--){
    console.log(i)
} ;

//2)- Difference between initialization and declaration.

// initialization: assigning a value to a variable.
// declaration: creating a variable without assigning a value and
             //it is done using "var", "let" and "const" keywords.
             

let x; // declaration
x = 10; // initialization
// here we can see that we have declared a variable x and 
// then initialized it with a value of 10.

//3)- Difference between "var" and "let" and "const"
    // "var" is function-scoped
    // "let" and "const" are block-scoped
    // "var" can be re-declared and updated
    // "let" can be updated but not re-declared
    // "const" cannot be updated or re-declared


//4)- Types of operators in javascript
// 1)- Arithmetic operators
// 2)- Assignment operators
// 3)- Comparison operators

//example-
let a=27;
let b=13;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); 
console.log(a%b); 
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
   

//5)- command to fetch all the local repositories
// git branch -a

//6)- command to fetch all the remote repositories
// git branch

//7)- "git pull" command update your local repository with the latest changes 
//    from the remote repository. 
//    It fetches the changes and merges them into your local branch.
// While "git clone" command create a copy of remote repository on your local machine.

//9)- git architecture
//"local machine" -> "local repository" ->"staging" -> "remote repository" -> "github"

//10- Merge is the process of combining changes from different branches into a main branch.
        // and "pr" is a request to merge changes from one branch into another branch.
         



