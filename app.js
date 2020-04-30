const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Bengaluru', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})

forecast(12.96991, 77.59796, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})