// scope: where a variable can be used.
// function scope: variable defined inside a function are not used from outside the function. var keyword: is function scope.
// block scope: variable declared inside block{} cannot be used from outside the block. let and const keyword: block scope.


1.  // var a=10;
  // let b=20;
// const c=30;

// function loginButtonClick()  {

// var p=100;
// let q=200;
// const r=300;

// if(true){

// var x= 1000;
// let y= 2000;
// const z= 3000;

//console.log(x)
// console.log(y)
// console.log(z)

// console.log(p)
// console.log(q)
// console.log(r)

// }

// }
// console.log(a)
// console.log(b)
// console.log(c)

// loginButtonClick();

// all values were printed successfully.

2.
var a=1;  // global block : can be used evrywhere. because i declared them outside from block and function.
let b=2;
const c=3;
function details (){

    var d=4;
    let e=5;
    const f=6;
     
    if (true){
        
        var g=7;  // has been printed because it is function scope, it can be used from outside block.
        let h=8;  // has not been printed because it is block scope,
        const i=9;  // block scope cannot be used outside from block.
    }
console.log(g) // printed because var is funtion scope, it can be used outside from block.
// console.log(h)
// console.log(i)

}
// console.log(d) // reference error: because i used them otside from function.
// console.log(e)
//  console.log(f)

details();
console.log(a) //  printed, because a,b,c are in global block.
console.log(b)
console.log(c)

