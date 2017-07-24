// Require Modules
var bodyParser = require('body-parser');
var path = require('path');

// Export public html routes

module.exports = function(app) 
{
	app.get("/survey", function(req,res) 
	{
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	app.use(function (req, res)
	{
		res.sendFile(path.join(__dirname, "../public/home.html"));
	})
}
