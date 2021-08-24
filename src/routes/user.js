const express = require('express')
const user = require('../controllers/user-controller')
const cache = require('../config/redis-cache')

module.exports = (router) => {
    'use strict';

    router.get('/users', cache.route(), user.list);
    router.get('/users/:id', cache.route(), user.show);
    router.post('/users', cache.route(), user.create);
    router.put('/users/:id', cache.route(), user.update);
};
