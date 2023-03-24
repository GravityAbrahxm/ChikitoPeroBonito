const axios = require('axios');

const fetchWeatherData = async () => {
    const { data } = await axios.get(
        'https://raw.githubusercontent.com/GravityAbrahxm/PelisApi/main/peliculas.json?fbclid=IwAR21XUH9IX5cx5GkhQA_XkI1MmeG8NHjnAkCRCUHPz95vyRS7fW6deLzjmI'
    );
    console.log(data);
}
fetchWeatherData();