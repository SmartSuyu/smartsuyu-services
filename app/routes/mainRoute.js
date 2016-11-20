module.exports = function(app) {
    // Routes
    var userRoute = require('./user');
    var sensorAguaRoute = require('./sensorAgua');
    var sensorTierraRoute = require('./sensorTierra');

    userRoute(app);
    sensorAguaRoute(app);
    sensorTierraRoute(app);
};