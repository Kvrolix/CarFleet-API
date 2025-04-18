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

exports.getCar = async (req, res) => {
	try {
		// 1) Speak to DB with what exactly you want to perform
		// I am getting the parameters from the URL that i am providing in postman
		const car = await Car.findById(req.params.id);

		res.status(201).json({
			status: 'success',
			data: { car },
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.updateCar = async (req, res) => {
	try {
		const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

		res.status(201).json({ status: 'success', data: { car } });
	} catch (err) {
		res.status(404).json({
			status: 'Failed when updating the record.',
			message: err.message,
		});
	}
};

exports.deleteCar = async (req, res) => {
	try {
		const car = await Car.findByIdAndDelete(req.params.id);
		res.status(201).json({ status: 'success', message: 'Car deleted successfully' });
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};
