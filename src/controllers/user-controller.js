const UserModel = require('../models/user-model');

exports.list = function (req, res) {
    new UserModel().fetchAll().then(function (collection) {
        res.set({'Content-Type': 'application/json; charset=utf-8'})
        res.send(JSON.stringify(collection.toJSON(), null, 2));
    })
};

exports.create = function (req, res) {
    const newUser = req.body;
    new UserModel({
        name: newUser.name,
        quantity: newUser.quantity,
        total_cost: newUser.total_cost,
        address: newUser.address,
        postcode: newUser.postcode
    }).save().then(function (postedModel) {
        res.json(200, postedModel);
    });
};

exports.show = function (req, res) {
    const userId = req.params.id;

    new UserModel({
        id: userId
    }).fetch().then(function (resultingUser) {
        if (resultingUser) {
            res.set({'Content-Type': 'application/json; charset=utf-8'})
            res.send(JSON.stringify(resultingUser.toJSON(), null, 2));
        } else {
            res.json(404, {error: "User not found."});
        }
    });
};

exports.update = function (req, res) {
    const userId = req.params.id;
    const updatedUser = req.body;

    new UserModel({
        id: userId
    }).save(updatedUser, {patch: true}).then(function (updatedModel) {
        res.json(200, updatedModel);
    }, function () {
        res.json(404, {error: "No such User."});
    });
};
