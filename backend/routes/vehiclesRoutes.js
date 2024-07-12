const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const { generatePdf } = require('../utils/pdfGenerator');
const { sendEmail } = require('../utils/emailSender');

// Create a new vehicle
router.post('/vehicles', async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();

        // Generate PDF and send email
        const pdfBuffer = await generatePdf(vehicle);
        await sendEmail(vehicle.email, pdfBuffer);

        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all vehicles
router.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;