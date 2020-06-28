//require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//connect to db and make a collection
mongoose.connect("mongodb://localhost/cinema");
var db = mongoose.connection;
db.on("error", () => {
  //if the connection did not work
  console.log("try again mongoose connection does not work");
});
db.once("open", () => {
  console.log("you did it the mongoose connected to db");
});
module.exports = db;
