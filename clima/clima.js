let axios = require('axios')

const getClima = async(lat, long) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=cf4ac746e54c3849e7eafa272b80a612`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}