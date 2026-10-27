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
