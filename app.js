const express = require('express');
const mongoose = require('mongoose');
const app = express(); // Import express to create an Express application
const morgan = require('morgan');
const carRouter = require('./routes/carRoute'); // Import the carRoute from the routes folder

//  1) MIDDLEWARES 	Shared config for all routes

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev')); // Middleware to log the requests in the console, only in development mode
}
app.use(morgan('dev'));

// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next. and it is used to be placed in the stack
app.use(express.json()); // Middleware to add data to the body

app.use(express.static(`${__dirname}/public`)); // Middleware to serve static files from the public folder, with this option i can openany file in the public folder, like index.html, css, js, etc. and it will be served as a static file. The __dirname variable is a global variable that contains the path to the current directory, so we are using it to create the path to the public folder.

// carRouter;
app.use('/api/v1/cars', carRouter); // Middleware to use the carRouter for all requests to /api/v1/cars
module.exports = app; // Export the app object so it can be used in other files
