module.exports = function(app) {
    // Models
    var User = require('../models/sensor');

    // Routes
    User.methods(['get', 'put', 'post', 'delete']);
    User.register(app, '/sensor');
};