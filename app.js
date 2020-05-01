const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv[2]
 if (place) {
    geocode(place, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
 } else {
     console.log('Location not provided!')
 }