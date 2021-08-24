const express = require('express')
const order = require('../controllers/order-controller')
const cache = require('../config/redis-cache')

module.exports = (router) => {
    'use strict';

    router.get('/orders', cache.route(), order.list);
    router.get('/orders/:id', cache.route(), order.show);
    router.post('/orders', cache.route(), order.create);
    router.put('/orders/:id', cache.route(), order.update);
};
