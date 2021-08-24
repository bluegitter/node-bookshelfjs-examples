const expressJwt = require('express-jwt');
const {secretKey} = require('./constant');

const jwtAuth = expressJwt({
    secret: secretKey,
    credentialsRequired: true, // 设置为false就不进行校验了，游客也可以访问
    algorithms: ['RS256', 'HS256']
}).unless({
    path: ['/login', '/register']
});

module.exports = jwtAuth;
