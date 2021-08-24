const bookshelf = require("../config/mysql-db");

var UserModel = bookshelf.model('User', {
    tableName: 'users'
})

module.exports = UserModel
