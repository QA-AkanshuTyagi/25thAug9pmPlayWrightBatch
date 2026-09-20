// Object in JavaScript: 
// An object is a collection of properties, and
//  a property is an association between a "key" and a "value".

//JSON stands for JavaScript Object Notation.
// It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

let biodata = {
    names: "Anurag Tripathi",
    age: 22,
    gender: "Male",
    occupation: "Software Engineer",
    address: {
        city: "Lucknow",
        state: "Uttar Pradesh"
    }

};

// to print the object in the console.
console.log(biodata);
console.log(biodata.names);
console.log(biodata["names"]);
console.log(biodata["age"]);

// To access the values of an object, we can use the key of the object.
// There are two ways to access the values of an object.

console.log(Object.keys(biodata)); // to get the keys of the object.
console.log(Object.values(biodata)); // to get the values of the object.

