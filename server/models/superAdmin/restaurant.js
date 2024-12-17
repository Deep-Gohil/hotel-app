const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Superadmin'},
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
})

const hotel = mongoose.model("Hotel",restaurantSchema)
module.exports = hotel

