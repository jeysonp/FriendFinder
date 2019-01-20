// DEPENDENCIES

var path = require("path")
var express = require("express");

// EXPRESS CONFIGURATION

var app = express();
var port = process.env.PORT || 8080;

// Data parsing set up

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
