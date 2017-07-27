// Require modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Connect to express server
var app = express();

// Import friends from friends.js
var users = require('../data/friends.js');

// When /api/friends is visited, use "get" to display JSON data and export users data
exports.getUsers = app.get("/api/friends", function(req, res) {
	return res.json(users);
	console.log(users);
});

// When /api/friends is visited, use "post" to find the best match and export
exports.postUsers = app.post('/api/friends', function(req, res) {
	
	// Hold the survey user's info
	var newUser = req.body;

	// Begin by assuming the first friend in the users array in friends.js is the best match
	var friendMatch = 0;

	// Hold the lowest score.  
	// The best match is determined when the lowest score is closest to user's score
	var lowScore;

	// Find the score of the first friend and set to lowScore
	for (var j = 0; j < users.friends[0].scores.length; j++) {

		// Low score is the absolute value of the new user's score - the current friend's score
		lowScore += Math.abs(newUser.scores[j] - users.friends[0].scores[j]);
	}

	// Check if any other users have a lower score than the current best match
	for (var i = 1; i < users.friends[i].length; i++) {

		// Hold the value of the score of the current friend chosen
		var newScore = 0;

		// Low score is the absolute value of the new user's score - the current friend's score
		for (var j = 0; j < users.friends[i].scores.length; j++) {
			newScore += Math.abs(newUser.scores[j] - users.friends[i].scores[j]);
		};

		// if the newScore of the differences in scores is lower than the current low score, then assign the newScore to lowScore
		if (lowScore > newScore) {

			// if lowScore is greater than newScore, replace lowScore with newScore
			lowScore = newScore;

			// Current friendMatch is the index of the current user
			friendMatch = i;
		};
	} 

	// Push the new user (from survey) to the users list in friends.js
	users.friends.push(newUser);

	// Return the friendMatch to be used in modal on survey page
	res.send(users.friends[friendMatch]);
});

