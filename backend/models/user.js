const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    auth0Id: { type: String, required: true },
    lastLogin: { type: String, default: null },
    createdAt: { type: Date, required: true }
});

UserSchema.path('email').validate(email => { 
    // todo validate email  
}, "Email cannot be blank");

module.exports = mongoose.model("User", UserSchema);