// Personal API Key for OpenWeatherMap API
const apiKey = '491a53b2fc3f1176a2fc10498d048ca3&units=imperial';
/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener for the generate button
document.getElementById('generate').addEventListener('click', performAction);


async function performAction() {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    const weatherData = await getWeather(baseURL, zip, apiKey);
    if (weatherData) {
        await postData('/addWeatherData', {
            date: newDate,
            temp: weatherData.main.temp,
            content: feelings
        });
        retrieveData();
    }
}


// Async GET request to the OpenWeatherMap API
const getWeather = async (baseURL, zip, key) => {
    const res = await fetch(baseURL + zip + '&appid=' + key);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

// Async POST request to send data to server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },       
        body: JSON.stringify(data), 
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

// Update UI with data from server
const retrieveData = async () => {
    const request = await fetch('/getWeatherData');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}°F`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.content}`;
    } catch (error) {
        console.log("error", error);
    }
};
