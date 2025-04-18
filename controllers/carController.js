const Car = require('../models/carModel');

exports.getAllCars = async (req, res) => {
	try {
		// 1) QUERY THE DATABASE FOR ALL CARS
		const cars = await Car.find(); // This line of code fetches all documents from the 'cars' collection

		res.status(200).json({
			status: 'success',
			results: cars.length, // It is good to specify the number of results, for the client how many things are returned
			data: {
				// cars:cars, //name of the data, in ES6 it doesn't need to be repeated
				cars,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.createCar = async (req, res) => {
	try {
		const newCar = await Car.create(req.body); // Create a new car using the Car model and the request body

		res.status(201).json({
			status: 'success',
			data: {
				car: newCar, // Send back the new car
			},
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ status: 'fail', message: err });
	}
};
