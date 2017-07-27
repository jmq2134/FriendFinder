// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Connect to express server
var app = express();


// If the URL ends with /survey, display survey.html
exports.survey = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

// Else display home.html
exports.home = app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

