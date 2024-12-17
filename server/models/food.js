const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const Food = mongoose.model('Food', foodSchema);
module.exports = Food
    