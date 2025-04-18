const express = require('express');
const router = express.Router(); // Create a new router object
const carController = require('../controllers/carController'); // Import the carController

router.route('/').get(carController.getAllCars).post(carController.createCar); // Route to create a new carget all cars

module.exports = router; // Export the router object so it can be used in other files
