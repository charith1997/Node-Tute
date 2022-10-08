// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum / what we want)

// can do like this or
const names = require("./3-names");
const sayHi = require("./3-utils");
const data = require("./3-alternative-flavor");

require("./3-mind-grenade");

// console.log(names);
// console.log(sayHi);
console.log(data);

sayHi("Charith");
sayHi(names.name1);
sayHi(names.name2);

//  Like this - destructuring
// const { name1, name2 } = require("./3-names");
// const sayHi = require("./3-utils");

// sayHi("Charith");
// sayHi(name1);
// sayHi(name2);
