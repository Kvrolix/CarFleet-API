const express = require('express');
const router = express.Router(); // Create a new router object
const carController = require('../controllers/carController'); // Import the carController

router.route('/').get(carController.getAllCars).post(carController.createCar); // Route to create a new carget all cars

// Example: 127.0.0.1:4000/api/v1/cars?id:6802337bc7946ff574f17532
router.route('/:id').get(carController.getCar).patch(carController.updateCar).delete(carController.deleteCar); // Route to get a single car by its ID, update it, and delete it; // Route to get a single car by its ID

module.exports = router; // Export the router object so it can be used in other files
