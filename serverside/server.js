var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "../cinemaclient/build")));

app.listen(9000, () => {
  console.log("Listening!");
});
