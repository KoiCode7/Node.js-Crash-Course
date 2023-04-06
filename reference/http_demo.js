const http = require("http");

// Create sever object
http
  .createServer((req, res) => {
    // Write response
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
