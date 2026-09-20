// QUESTION 1. Please WAP to print numbers from 1 to 100 in reverse order.

  let i; // variable 
  for(let i=100;i>=1;i--){
      console.log(i)
  };
  console.log("");

// Question -2. Difference between initialization and Declaration. Explain using write program.

//Initialization - In Initialization we assign the value to a variable or keyword.

  // Syntax -
  //age = 22;

//Declaration - In declaration to tell the system  we are creating a variable . 

 // Syntax -
  //let age;

  // full program
  
    let age2;              //declaration
      age2 = 22;          //Initialization
    console.log(age2);
    console.log("");
 
  //  Question 3 . . Diffference between var let const.

    //In javascript these all are the variable keywords

    //1- var = var  it is a keyword where we can perform both re-declaration and assigning of a variable.
    // example -

       var age1 = 21;
      var age1 = 18;
       console.log(age1);

     //2- let = let it is a keyword where we can perform the only assigning the value but  re-declaration is not allowed
      //example - 

       let age = 25;
           age = 30;
          console.log(age);

        // 3- const = It is a keyword where we can fix the value not allowed re-declaration and re-assigning.
        //example

         const age3 =60;
          console.log(age3);
          console.log("");

       // question 4 . Types pf operators. Define using program.

       // # 1 Arithmetic operators( +, - , /, * , %, ++, --, **)

      // Example 

       let a = 5;
        b= 4;
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);
        console.log(a%b);
        console.log("");

      // # 2 Comparison operator 
      
     // Example 
       var a1 = 10 ;
      b= 20; 

  console.log(a>b);
  console.log(a<b);
  console.log(a>=b);
  console.log(a<=b);
  console.log(a==b);
  console.log(a!=b);
  console.log(a===b);
  console.log(a!==b);
  console.log("");

  // # 3 assignment  operators
 var a2=10;
 b=20;
  console.log(a+=5);
  console.log(a-=3);
  console.log(a*=2);
  console.log(a/=4);
  console.log("");

 // Question 5 Command to fetch all remote repositories

 // ANSWER = git fetch --all

    //Question 6 Comand to fetch all local repo

//Answer = 
   
    //Questions 7 Difference between pull and clone

    // pull =  1- repositry ko update krna
    //          2- kisi team members ke latest changes dekhna apne computer mai 
    
    // Clone =  1- remote repositry ko first time local computer pr copy krna 
    //          2- new repostry create krna.
    
    //Question 8 Do some changes in your local machine and move same code to gut hub


    // Answer 
//     git status
//     git add .
//    git commit -m "Updated code"
//    git push 

//Question 9 = Define architecture of git
 
// Answers

// Working Directory - jha hmm apni actual files pr changes krte hai.
// staging - changes ko staging mai send krte hai using 'git add .' 
// local reposirty - changes ko local reposirty mai save krte hai using 'git commit'.
//Remote reposirty - local repostry ke changes ko github remote reposirty pr behjte hai using 'git push'.

//Questions 10 - What is branching in git and move any code in subbranch

//Answers - BRANCHING - sabhi team members ki apni own branche hoti hai jha sab log local repositry se code 
// edit krke apni branch mai bejyange, ouske baad run kryange tab main bramch mai move hogi .

//move any code in subbrach = using 'git push -u origin '

//Question 11- Define What is merge and pr in git hub

//Answers = merge - ek branch ke changes ko dusri branch mai combine krna . using 'git checkout main' 
  
//PR - github se phuchna/request krna kisi team member ki branch mai joo changes hue hai ounhe main branch mai merge krna .//