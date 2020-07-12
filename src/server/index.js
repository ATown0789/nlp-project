//Port for server
const PORT = 8080;

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
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const corsOptions = {
	origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

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

const textPostHandle = (req,res) => {
	const text = req.body;
	textapi.sentiment({
		'text': text,
		'mode': 'tweet'
		}, 
		(error, response) => {
			if (error === null) {
			console.log(response);
			res.send(response)
			}
		}
	);
}

/*End Handle Functions*/


app.post('/textAPI', textPostHandle);


// Callback to ensure server is listening
const listening = () => {
	console.log('server running');
	console.log(`running on localhost: ${PORT}`);
};

// Spin up the server
const server = app.listen(PORT, listening);