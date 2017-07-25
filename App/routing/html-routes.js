// Require Modules
var bodyParser = require('body-parser');
var path = require('path');

// Connect to express server
var app = express();


// Export public html routes

module.exports = function(app) 
{
	// If the URL ends with /survey, display survey.html
	app.get("/survey", function(req,res) 
	{
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	// Else display home.html
	app.use(function (req, res)
	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})
}
