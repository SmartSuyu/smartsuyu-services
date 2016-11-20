var restful = require('node-restful');
var mongoose = require('mongoose');

var Sensor = mongoose.Schema({
    ph: 'number',
    conductividad: 'number',
    solidos_disueltos: 'number',
    salinidad: 'number'
});

module.exports = restful.model('Sensor', Sensor);