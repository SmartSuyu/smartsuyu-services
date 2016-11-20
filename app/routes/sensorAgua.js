module.exports = function(app) {
    // Models
    var SensorAgua = require('../models/sensor_agua');

    // Routes
    SensorAgua.methods(['get', 'put', 'post', 'delete']);
    SensorAgua.register(app, '/sensorAgua');
};