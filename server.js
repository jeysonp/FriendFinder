// DEPENDENCIES

var express = require("express");
// var path = require("path");

// EXPRESS CONFIGURATION

var app = express();
var PORT = process.env.PORT || 8080;


// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// //ROUTER

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
