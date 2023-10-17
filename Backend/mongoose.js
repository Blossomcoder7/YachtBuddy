const mongoose = require("mongoose");
const config = require('./config');
mongoose.connect(  config.mongoURI );
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Conected to Database : MongoDB");
});



module.exports = db;
