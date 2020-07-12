//Port for server
const PORT = 8081;

//Express to run server and routes
const express = require('express')

//Start an instance of app using express
const app = express()

/***
*Dependencies
*/
//Aylien for API SDK 
const aylien = require("aylien_textapi")

//dotenv for .env files to hide api keys
const dotenv = require('dotenv')
dotenv.config();

//Middleware
const bodyParser = require('body-parser')

//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
//Configure body-parser to expect plain text instead of json
app.use(bodyParser.text({type: '*/*'}));

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

//Initiate Aylien SDK with API keys
const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

/***
*Handle Functions
*/

//Short text analysis
const textPostHandle = (req,res) => {
	const text = req.body;
	console.log("Request to '/textAPI", text);
	textapi.sentiment({
		'text': text
		}, 
		function(error, response, remaining) {
			if (error === null) {
				console.log('Aylien response', response, remaining);
				res.send(response)
			}
			else 
				console.log(error);
		}
	);
}

//Url of blog to analyze
const URLPostHandle = (req,res) => {
	const text = req.body;
	console.log("Request to '/urlAPI", text);
	textapi.sentiment({
		'url': text
		}, 
		function(error, response, remaining) {
			if (error === null) {
				console.log('Aylien response', response, remaining);
				res.send(response)
			}
			else 
				console.log(error);
		}
	);
}



/*End Handle Functions*/


app.post('/textAPI', textPostHandle);
app.post('/urlAPI', URLPostHandle);


// Callback to ensure server is listening
const listening = () => {
	console.log('server running');
	console.log(`running on localhost: ${PORT}`);
};

// Spin up the server
const server = app.listen(PORT, listening);