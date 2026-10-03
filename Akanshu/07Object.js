let biodata = {
  fName: ["akanshu"],
  Lname: "Tyagi",
  age: 31,
  Occupation: "Pvt job",
  fees:25000
};
console.log(biodata["fname"]);
console.log(Object.values(biodata));
console.log(Object.keys(biodata));
// let bio="fname"
for (let bio in biodata) {
  console.log(bio, ":", biodata[bio]);
}
