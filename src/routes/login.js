const login = require('../controllers/login-controller')

module.exports = (router) => {
    'use strict';

    router.post('/login',  login.login);
};
