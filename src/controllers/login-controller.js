var UserModel = require('../models/user-model');
const {secretKey} = require('../config/constant')
const jwt = require('jsonwebtoken');

exports.login = function (req, res) {
    const reqUser = req.body;
    if (reqUser) {
        // 用户登录成功过后生成token返给前端
        let promise = new UserModel({
            name: reqUser.username
        }).fetch()

        promise.then(resultingUser => {
            if (resultingUser) {
                let user = resultingUser.toJSON();
                if (user.password === reqUser.password) {
                    let token = jwt.sign(user, secretKey, {
                        expiresIn: 60 * 60 * 24 // 授权时效24小时
                    });
                    res.json({
                        success: true,
                        message: 'success',
                        token: token
                    });
                } else {
                    res.status(401).json({error: "Password is illegal."})
                }
            } else {
                res.json(401, {error: "User not found."});
            }
        });
    }
};

