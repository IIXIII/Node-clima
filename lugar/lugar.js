let axios = require('axios')

const getLugarLatLong = async(ciudad) => {
    let city = encodeURI(ciudad)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAVzWmgvuAMFXauD5FCtiviBi6klrGL0rM
    `)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No encontramos nada en ${ciudad}`)
    }
    let results = resp.data.results[0];

    return {
        direccion: results.formatted_address,
        long: results.geometry.location.lng,
        lat: results.geometry.location.lat,
    }
}

module.exports = {
    getLugarLatLong
}