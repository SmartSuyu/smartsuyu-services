module.exports = function(app) {
    // Routes
    var userRoute = require('./user')(app);
    var userRoute = require('./sensor')(app);
};