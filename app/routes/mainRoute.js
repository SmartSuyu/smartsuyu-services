module.exports = function(app) {
    // Routes
    var userRoute = require('./user')(app);
    var sensorRoute = require('./sensor')(app);
};