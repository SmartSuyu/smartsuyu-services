var restful = require('node-restful');
var mongoose = require('mongoose');

var SensorAgua = mongoose.Schema({
    ph: 'number',
    conductividad: 'number',
    solidos_disueltos: 'number',
    salinidad: 'number',
    temperatura: 'number'
});

module.exports = restful.model('SensorAgua', SensorAgua);