// GLOBALS      - NO WINDOW

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);


//  repeat includes within brackets after each 1s 
setInterval(() => {
    console.log('Set interval 1s');
}, 1000)

// terminate process after 1s
setTimeout(() => {
    console.log('Set time out 1s');
}, 1000)