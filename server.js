const http = require("node:http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello Full Stack</title>
</head>
<body>
  <h1>Hello Full Stack</h1>
  <p>This page was sent by my Node.js server.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});