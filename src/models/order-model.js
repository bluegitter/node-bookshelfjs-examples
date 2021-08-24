const bookshelf = require("../config/mysql-db");

const OrderItem = bookshelf.model('OrderItem', {
    tableName: 'order_items',
    order() {
        return this.hasOne('Order', 'id')
    }
})

const OrderModel = bookshelf.model('Order', {
    tableName: 'orders',
    orderItems() {
        return this.hasMany('OrderItem', 'order');
    }
})

module.exports = OrderModel
