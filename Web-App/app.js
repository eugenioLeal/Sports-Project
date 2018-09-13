const http = require('http');
const fs = require('fs');
const port = 3000;


// Get Current Date
var date = new Date();
var day = date.getUTCDate();
var month = date.getUTCMonth() + 1;
var year = date.getFullYear();
var currentDate = year + '-' + month + '-' + day;

//--------------------//
//-- My Sports Feed	--//
//--------------------//
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("1.2", true, "file", "results/nfl/");

// Authenticate with public key here


//var pulledData = msf.getData('nfl', '2018-playoffs', 'full_game_schedule', 'json', {});
var pulledData2 = msf.getData('nfl','2017-regular', 'scoreboard', 'json', {});
// If you want to use a json object
// var rawJSON = fs.readFileSync(path);
// var jsonObject = JSON.parse(rawJSON);


// TODO: Srape headlines from www.nfl.com/news


//------------------------//
//-- Reading HTML file	--//
//------------------------//
fs.readFile("./index.html", function(err, html) {
	if( err ) {
		throw err;
	}
	//----------------------//
	//-- Creating Server	--//
	//----------------------//
	const server = http.createServer((req, res) => {
		// To handle html variable "interpolation" or "variables in views"

		// Convert the html binary file to String
		var htmlString = html.toString();
		// array with all the {variables} inside index.html file
		var variables = htmlString.match(/[^\{\}]+(?=\})/g);
		// Replace all of the {variables} with variables from this file.
		for (var i = 0; i < variables.length; i++) {
			var value = eval(variables[i]);
			htmlString = htmlString.replace("{" + variables[i] + "}", value);
		}

		// Handle Response
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(htmlString);
		res.end();
	}).listen(port);
});
