// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Define port
var PORT = process.env.PORT || 8000;

// Connect to express server
var app = express();

// Require routes
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');

// Use get routes for home and survey
app.use('/', htmlRoutes.home);
app.use('/', htmlRoutes.survey);

// Use get routes for home and survey
app.use('/', apiRoutes.getFriends);
app.use('/', apiRoutes.postFriends);

// Server listening
app.listen(PORT);
console.log("App listening on PORT " + PORT);