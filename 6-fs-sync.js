const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// if file is not, it will create otherwise it will update
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first} and ${second}`
// );

// overwritten the content
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} and ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next task");
