const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

// Initialize main project folder
app.use(express.static('website'));

const port = 8000;
const server = app.listen(port, () => {
    console.log(`running on localhost: ${port}`);
});

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// POST route
app.post('/addWeatherData', (req, res) => {
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    };
    res.send(projectData);
});

// GET route
app.get('/getWeatherData', (req, res) => {
    res.send(projectData);
});


