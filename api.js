const axios = require('axios');

const fetchWeatherData = async () => {
    const { data } = await axios.get(
        'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd9b2efc5f8105b448519cd546228900'
    );
    console.log(data);
}
fetchWeatherData();