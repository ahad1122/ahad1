const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    completeName: String,
    email: String,
    phoneNumber: String,
    address: String,
    vehicleBrand: String,
    chassisNumber: String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);