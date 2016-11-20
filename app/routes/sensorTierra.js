module.exports = function(app) {
    // Models
    var SensorTierra = require('../models/sensor_tierra');

    // Routes
    SensorTierra.methods(['get', 'put', 'post', 'delete']);
    SensorTierra.register(app, '/sensorTierra');
};