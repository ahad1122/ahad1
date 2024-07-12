const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(express.json());
app.use('/api', vehicleRoutes);

mongoose.connect('mongodb://localhost/vehicle_management', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(3000, () => console.log('Server is running on port 3000'));