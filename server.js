// STEP 1
const mongoose = require('mongoose'); // Import the mongoose package to connect to MongoDB
const dotenv = require('dotenv'); // Import the dotenv package to load environment variables from a .env file
dotenv.config({ path: './config.env' }); // Load environment variables from the .env file
const app = require('./app'); // Import the app object from app.js

// STEP 2 CONNECT TO MONGODB
// Replace <PASSWORD> in the connection string with the actual password from the environment variables
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
	})
	.then(() => {
		// console.log(con.connections); // Log the connection object to the console
		console.log('DB connection successful!'); // Log a message when the connection to the database is successful
	});

// REMEMBER ABOUT NODEMON
const port = process.env.PORT || 4000; // Set the port to the value of the PORT environment variable or 3000 if not set
app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
