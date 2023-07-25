const { log } = require("console");
const http = require("http");

//create the server
const server = http.createServer((req, res) => {
  const url = req.url;
  const header = req.header;

  //Now we have to go for different routes

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Homepage");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is About page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("No Page found");
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
