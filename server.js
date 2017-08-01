// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Define port
var PORT = process.env.PORT || 8000;

// Connect to express server
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(express.static('app/public'));
app.use('/', express.static(__dirname + '/app/public'));

// HTML Routes
var htmlroutes = require('./App/routing/html-routes.js');

app.use('/', htmlroutes);

// API Routes
var apiroutes = require('./App/routing/api-routes.js');

app.use('/api', apiroutes);

// Server listening
app.listen(PORT);
console.log("App listening on PORT " + PORT);
