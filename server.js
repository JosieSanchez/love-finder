var bodyParser = require('body-parser'); 
var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;

//this create apoplicate/x-www-form urlencode parser
//var jsonParser = bodyParser.json()


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true}))
 
// parse different json types
app.use(bodyParser.json({type:'application/*+json'}))

//parse to a custom Buffer
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))

app.use(bodyParser.text({type:'text/html'}))

//app.use(express.static('public'))
 
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});