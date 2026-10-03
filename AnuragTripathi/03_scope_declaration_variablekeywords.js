// SCOPE - scope determines the accessibilty and visibility of variable in different parts of code..
// types-: 
// "function scope"  
// "block scope"

// "var" is a function scope;
// "let" and "const" is a block scope;


// example-

var a=10;
let b=20;
const c=30;
// we can print this value anywhere.

function anuragplaytime(){
    var d=100;
    let e=200;
    const f=300;
    //we can only print the value inside the function. 

    if(true){
        var g=1000;
        let h=2000;
        const i=3000;
        //here "var is a function scope "
        // and "let" and "const" is a block scope because its under if block and also cons
        // its has limitetion.
        // we can not print "let" and "const" outside this block.
        
       console.log(a)
       console.log(b)
       console.log(c)
       console.log(d)
       console.log(e)
       console.log(f)
       console.log(g)
       console.log(h)
       console.log(i) 
    }
}
anuragplaytime();
// to run any function we need to recall it at the end.

// "every value should be print inside the function block and the values 
// which is outside the function can be print anywhere ".


