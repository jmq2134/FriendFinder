// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Connect to express server
var app = express.Router();

// If the URL ends with /survey, display survey.html
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// Else display home.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
})

module.exports = app;
