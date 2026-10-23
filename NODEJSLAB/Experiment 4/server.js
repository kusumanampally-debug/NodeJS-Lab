const express = require('express');
const axios = require('./node_modules/axios/index.d.cts');

const app = express();
const PORT = 3000;
const API_KEY = 'c37e74aaadd195e99c60c5ca8dbc20c8'; // Replace with your actual API key

app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use(express.json());

// Fetch weather using async/await
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const temperature = response.data.main.temp;
        res.json({ temperature });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Error fetching weather data!' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
