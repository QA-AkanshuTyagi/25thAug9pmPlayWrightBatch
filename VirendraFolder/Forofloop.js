let a="Virendra";
let b="Anurag";
let c="Deepak";

let names =["Virendra","Anurag","Deepak"];

for (let eachname of names)
{
    console.log(eachname);
}

let empdetails =
{
    fname: "Virendra",
    lname: "Anurag",
    age : "Deepak",
}
console.log(empdetails);
console.log(Object.values(empdetails));
console.log(Object.keys(empdetails));

for(let details in empdetails)
{
    console.log(details, ":", empdetails[details]);
}