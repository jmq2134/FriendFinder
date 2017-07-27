// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Define port
var PORT = process.env.PORT || 8000;

// Connect to express server
var app = express();

// Require routes
var htmlroutes = require('./App/routing/html-routes.js');
var apiroutes = require('./App/routing/api-routes.js');

// Use get routes for home and survey
app.use('/', htmlroutes.home); // diplays home.html
app.use('/', htmlroutes.survey); // displays suvery.html


// // Use get routes for api data
app.use('/', apiroutes.getUsers);

// app.use('/api', apiroutes.postFriends);

// Server listening
app.listen(PORT);
console.log("App listening on PORT " + PORT);