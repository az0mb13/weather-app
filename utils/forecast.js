const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=18aa53dcfa0124d6194d16bebb8b849a&units=metric'
    request({ url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service.', undefined)
        } else if (response.body.cod === "400") {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' +response.body.main.temp + ' degree Celcius in ' +response.body.name+ '. ' + response.body.weather[0].description)        }
    })

}

module.exports = forecast