require("dotenv").config();
// Apps JS
var express = require("express");
var app = express();
// console.log("Hello World");

// app.METHOD(PATH, HANDLER)
// app.get("/", (req, res) => {
//   res.send("Response String");
// });

// Serve an HTML File
// You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:

// absolutePath = __dirname + relativePath/file.ext
// console.log('Hello World')
// app.METHOD(PATH, HANDLER)
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// app.use(express.static(__dirname.concat('/public')))
app.use((request, response, next) => {
  console.log(request.method + " " + request.path + " - " + request.ip);
  next();
});
app.use("/public", express.static(__dirname.concat("/public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname.concat("/views/index.html"));
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    let response = "Hello json";
    res.json({ message: response.toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString(); // Hypothetical synchronous operation
    next();
  },
  (req, res) => {
    let response = { time: req.time };
    res.json(response);
  }
);

module.exports = app;
