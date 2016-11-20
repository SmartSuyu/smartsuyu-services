module.exports = function(app) {
    // Routes
    // var userRoute = require('./user');
    var sensorRoute = require('./sensor');

    // userRoute(app);
    sensorRoute(app);
};