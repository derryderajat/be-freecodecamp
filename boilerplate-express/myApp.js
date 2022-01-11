// Apps JS
var express = require("express");
var app = express();
console.log("Hello World");

// app.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.send("Response String");
});

// Serve an HTML File
// You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:

// absolutePath = __dirname + relativePath/file.ext

module.exports = app;
