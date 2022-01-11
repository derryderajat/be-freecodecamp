// Apps JS
var express = require("express");
var app = express();

// app.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.send("Response String");
});

console.log("Hello World");
module.exports = app;
