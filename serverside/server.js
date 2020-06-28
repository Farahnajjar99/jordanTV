var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var db = require("../mongooDatabase/database");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../cinemaclient/build")));

app.listen(9000, () => {
  console.log("Listening!");
});
