const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ["USER", "ADMIN", "SUPERADMIN"], default: "USER" },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
})

const User = mongoose.model("User", userSchema)
module.exports = User;