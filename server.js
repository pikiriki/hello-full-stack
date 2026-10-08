const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hello from my Node.js server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});