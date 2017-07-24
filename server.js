// Require dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Define port
var PORT = 8000;

var app = express();

// Handle data parsing with Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('app'));

// Require routes
require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

// Server listening
app.listen(process.env.PORT || 8000);
console.log('Listening on port %d', PORT);
