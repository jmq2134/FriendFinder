// Require modules
var bodyParser = require('body-parser');
var path = require('path');
var users = require('../data/friends.js')

// Export Api Routes

module.exports = function(app) 
{
	app.get("/api/friends", function(req,res) 
	{
		res.json(users);
	})

	app.post("/api/friends", function (req, res)
	{
		var finalDifference = 100;
		var yourMatch;
		users.forEach(function(item) 
		{
			var differenceNow = 0;
			for (i=0; i < item.scores.length; i++) 
			{
				differenceNow += Math.abs(item.scores[i] - req.body.scores[i]);
			}
			if (differenceNow <= finalDifference) 
			{
				finalDifference = differenceNow;
				yourMatch = item;
			}
		})
		res.json(yourMatch);
		users.push(req.body);
	})
}
