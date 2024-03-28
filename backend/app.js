const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Connect to your MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/Shopping');
const db = mongoose.connection;

// Set up routes
app.use('/api', userRoutes);

//app.use('/api/getstudents', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
