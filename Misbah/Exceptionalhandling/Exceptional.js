try {
  console.log(y);
} catch (error) {
  console.log(error.message);
}

console.log(10);

//Throw and Throws


browser = "chromes";

if (browser == "chrome") {
  console.log("chrome");
} else if (browser == "edge") {
  console.log("edge");
} else if (browser == "firefox") {
  console.log("firefox");
} else {
  throw new Error("Please check your browserName");
}

console.log(10);

// types of exception

let a = new Array(5);
a[0] = "akanshu";
a[1] = "rahul";
a[2] = "aditi";
a[3] = "kshamata";
a[4] = "deepak";
a[5] = "osama";
console.log(a[5]);

console.log(y);
