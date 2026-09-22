//ques 1.
for(let i=100; i>=1; i--){
    console.log(i);
}

//ques 2.
// declaration
let x;
//initialisation: assigning a value.
let y=45;
console.log(x)
console.log(y)

//ques3. var: it is function scope and it allows to redeclaration and reassignment.
var a=18;
var b=45; // reassignment value and redeclaration.
var c;
var c=93; // redeclaration. 
console.log(a)
console.log(b)
console.log(c)

// let: it is block scope and it allows only reassingning and doednt allow redeclare.
let age2=18;
 age2=21; // reassign
 // let age; // erroe because it is redeclaration.

// const: it is block scope and doesnt allow to reassignment and redeclaration.
 const year =2026;
 //  year=2027; error
 //  year=year+1; erroe
   //ques4. operators: arithmetic, assignment, comparison
   //arithmetic operators

   let e=8;
   let f=3;
   let sum=e+f
   let diff=e-f
   let prod=e*f
   let div=e/f
   let rem=e%f
   let expon=e**f
   console.log(sum)
   console.log(diff)
   console.log(prod)
   console.log(div)
   console.log(rem)
   console.log(expon)

   // assignment op
   let age=19;
   age+=1 // age=age +1
   console.log(age)
    age-=1 // age=age-1
    console.log(age)
   age*=3 // age =age *3
   console.log(age)
   age/=2 // age= age/2
   console.log(age)
   age%=3 // age= age%3
   console.log(age)
   age**=2 // age= age**2
   console.log(age)

   // comparision op.: it gives ans in boolean form.
   let age1=19;
   console.log(age1>18)
   age1=17;
   console.log(age1>18)
   let r=5;
   let s="5";
   console.log(r==s)
   console.log(r===s)
   console.log(r!=s)
   console.log(r!==s)
   let m= 19;
   let n= 21;
   console.log(m<=n)
   console.log(m>=n)
 
   //ques 5. fetch command: git fetch --all
   //Q 7. git pull: this command updates our local machine with new code on git hub
   //git clone: to copy the git hub repository's url to dowmloat it on local machine.
   //Q 9. local machine, staging, local repository, remote repository
   local machine: here we write code 
   staging: by git add we decide to send changes
   local repository: by git commit our changes or code store in git database in our local machine. 
   remote repos: by git push our code or changes saves in git hub repos. 

  //Q.10  there is a main branch on git but apart from it we create another branch, this process is called branching.
   // git branch<branch name> to make new branch
   // write any code and command
                                // git add .
                                // git commit-m"moving code"
                                // git push origin main

   //Q.11 pull request: we write code in our subbranch,then after push command we genrate pull request on git hub,
   merge: after writing code or changes to showing its in main branch is merge. 

