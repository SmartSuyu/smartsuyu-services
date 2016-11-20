module.exports = function(app) {
    // Models
    var Sensor = require('../models/sensor');

    // Routes
    Sensor.methods(['get', 'put', 'post', 'delete']);
    Sensor.register(app, '/sensor');
};