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


// let projectData = {};

// // Require Express to run server and routes
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Start up an instance of app
// const app = express();

// /* Middleware */
// // Here we are configuring express to use body-parser as middleware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Cors for cross origin allowance
// app.use(cors());

// // Initialize the main project folder
// app.use(express.static('website'));

// // Setup Server
// const port = 8000;
// const server = app.listen(port, () => {
//     console.log(`Server running on localhost: ${port}`);
// });

// // GET route that returns the projectData object
// app.get('/all', (req, res) => {
//     res.send(projectData);
// });

// // POST route that adds incoming data to projectData
// app.post('/addd', (req, res) => {
//     const { temperature, date, userResponse } = req.body;
//     projectData = {
//         temperature,
//         date,
//         userResponse
//     };
//     res.send(projectData);
// });
