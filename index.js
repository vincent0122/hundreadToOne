const http = require("http");
const {createCollage} = require("./jimp.js");
const {faceRec} = require("./faceRec.js");

// Create the HTTP server
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const imagePath = "./images/1.jpg";
    faceRec(imagePath).then((landmarks) => {
      console.log(landmarks);
    });
    //createCollage();
  } else {
    // If the client sends any other type of request or URL, send a 404 Not Found error
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("404 Not Found");
  }
});

// Start the server and listen for incoming requests on port 8000
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
