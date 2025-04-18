const mongoose = require('mongoose'); // Import the mongoose package to connect to MongoDB
const { type } = require('os');

const carSchema = new mongoose.Schema(
	{
		brand: {
			type: String,
			required: [true, 'Brand is required'],
			trim: true,
			minLength: [1, 'A brand name must be at least 1 character long'],
			maxLength: [20, 'A brand name must be less than or equal to 20 characters long'],
		},
		model: {
			type: String,
			required: [true, 'Model is required'],
			trim: true,
			minLength: [1, 'A model must be at least 1 character long'],
		},
		productionYear: {
			type: Number,
			required: [true, 'Production year is required'],
			min: [1900, 'Production year must be at least 1900'],
			max: [2200, 'Production year must be less than or equal to 2200'],
		},
		fuelType: { type: String, enum: { values: ['Petrol', 'Diesel', 'Electric', 'Hybrid'], message: 'Invalid fuel type' }, required: [true, 'Fuel type is required'] },
		mileage: {
			type: Number,
			required: [true, 'Mileage is required'],
			min: [0, 'Mileage must be at least 0'],
			max: [1000000, 'Mileage must be less than or equal to 1000000'],
		},

		registrationPlate: {
			type: String,
			trim: true,
			unique: true,
			required: [true, 'Registration plate is required'],
			minLength: [3, 'A registration plate must be at least 1 character long'],
			maxLength: [15, 'A registration plate must be less than or equal to 20 characters long'],
		},
		notes: {
			type: String,
			trim: true,
			maxLength: [1000, 'A note must be less than or equal to 100 characters long'],
			// it would be nice to have notes with every new patch about this car, e.g [date, broken mirror, dirty seat etc.]
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } } // Enable virtual getters and set toJSON and toObject options to true
);

const Car = mongoose.model('Car', carSchema);
// The model name is 'Car' and it will be used to create a collection named 'cars' in the database. Mongoose automatically pluralizes the model name to create the collection name. For example, if the model name is 'Car', the collection name will be 'cars'.

module.exports = Car; // Export the Car model so it can be used in other files
