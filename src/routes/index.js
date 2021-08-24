const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwtAuth = require('../config/jwt');

router.use(jwtAuth);

router.use((req, res, next) => {
    let request = `Request URL:, ${req.originalUrl}\nRequest Type: ${req.method}`;
    next();
});

fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.js') return;
    let name = file.substr(0, file.indexOf('.'));
    require('./' + name)(router);
});

router.use(function (error, req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500);
    res.send(JSON.stringify(error));
})

// In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them.
// This behavior is because a 404 response simply indicates the absence of additional work to do; in other words,
// Express has executed all middleware functions and routes, and found that none of them responded. All you need to
// do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:
router.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(401);
    res.send(JSON.stringify({
        code: 401,
        name: 'Access Forbidden.',
        message: 'Full authentication is required to access this resource.'
    }));
})

module.exports = router;
