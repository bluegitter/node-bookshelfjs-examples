const ExpressRedisCache = require('express-redis-cache')
const cache = ExpressRedisCache({
    expire: 30, // optional: expire every 10 seconds
    auth_pass: 'pass'
})

module.exports = cache
