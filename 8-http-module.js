const http = require("http");

// This is the basic of http request
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Hello, Welcome to our home page");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page");
  }
  res.end(`
    <h1>Opps</h1>
    <p>We can't seem to find the page you are lokking for</p>
    <a href="/">back home</a>
    `);
});

server.listen(5000);
