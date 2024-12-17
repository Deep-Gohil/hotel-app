const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
        userId: {type:mongoose.Schema.Types.ObjectId,ref:"User"},
        restaurantId: ObjectId,
        foodItems: [{ foodId: ObjectId, quantity: Number }],
        totalAmount: Number,
        status: String 
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;