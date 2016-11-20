var restful = require('node-restful');
var mongoose = require('mongoose');

var SensorTierra = mongoose.Schema({
    temperatura: 'number',
    humedad: 'number',
    fertilidad: 'number'
});

module.exports = restful.model('SensorTierra', SensorTierra);