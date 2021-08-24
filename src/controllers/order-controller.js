var OrderModel = require('../models/order-model');

exports.list = function (req, res) {
    new OrderModel().fetchAll({withRelated: ['orderItems']}).then(function (collection) {
        res.set({'Content-Type': 'application/json; charset=utf-8'})
        res.send(JSON.stringify(collection.toJSON(), null, 2));
    })
};

exports.create = function (req, res) {
    const newOrder = req.body;
    new OrderModel({
        name: newOrder.name,
        quantity: newOrder.quantity,
        total_cost: newOrder.total_cost,
        address: newOrder.address,
        postcode: newOrder.postcode
    }).save().then(function (postedModel) {
        res.json(200, postedModel);
    });
};

exports.show = function (req, res) {
    const orderId = req.params.id;

    new OrderModel({
        id: orderId
    }).fetch({
        withRelated: ['orderItems']
    }).then(function (resultingOrder) {
        if (resultingOrder) {
            res.set({'Content-Type': 'application/json; charset=utf-8'})
            res.send(JSON.stringify(resultingOrder.toJSON(), null, 2));
        } else {
            res.json(404, {error: "Order not found."});
        }
    });
};

exports.update = function (req, res) {
    const orderId = req.params.id;
    const updatedOrder = req.body;

    new OrderModel({
        id: orderId
    }).save(updatedOrder, {patch: true}).then(function (updatedModel) {
        res.json(200, updatedModel);
    }, function () {
        res.json(404, {error: "No such Order."});
    });
};
