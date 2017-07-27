// Import friends from friends.js
var friends = require('../data/friends.js');

// Require modules
var path = require('path');
var express = require('express');

var app = express();


// Show all friends
exports.apiGet = app.get('/api/friends', function(req, res) {
    res.json(friends.friends);
    console.log(friends.friends);
});

exports.apiPost = app.post('/api/friends', function(req, res) {

    // Hold friend variables
    var surveyFriend = req.body;
    var surveyName = surveyFriend.name;
    var surveyScores = surveyFriend.scores;

    console.log(surveyFriend);

    // Best match variable - start at friend 0
    var bestMatch = {
        name: "",
        diff: 100
    }

    var scoreDiff = 0;

    // 1st Loop: Loop through all friends to check for best match 
    for (var i = 0; i < friends.length; i++) {

        scoreDif = 0;

        // 2nd Loop: Loop through each friend's scores and check against surveyFriend
        for (var j = 0; j < friends[i].scores[j]; j++) {

            // Calculate the difference between survey scores and friend scores
            scoreDif += Math.abs(parseInt(surveyScores[j]) - parseInt(friends[i].scores[j]));

            // If the sum of differences is less then the differences of the current "best match"
            if (scoreDif <= bestMatch.diff) {

                // Replace bestMatch with current friend
                bestMatch.name = friends[i].name;
                bestMatch.diff = scoreDif;
            }
        }
    }

    // Push surveyFriend into friends.js database
    friends.friends.push(surveyFriend);

    // Return bestMatch json for home.html modal
    res.json(bestMatch);
})