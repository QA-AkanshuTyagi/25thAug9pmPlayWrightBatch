
// Object in JavaScript


let boidata = {
    fname: "Sanjeev",
    mname: "Kumar",
    lname: "Sharma",
    age: 29,
    City: "Noida",
    Occupation: "Software Tester"
};

console.log(boidata);
console.log(Object.keys(boidata));
console.log(Object.values(boidata));

for (let bio in boidata) {
    console.log(bio, ":", boidata[bio]);
}




