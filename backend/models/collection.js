const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionsSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required: true},     // Corresponds to _id in models/user.js
    gameId: {type: mongoose.Types.ObjectId, required: true}      // Corresponds to _id in models/game.js
});

// Compile model from schema
module.exports = mongoose.model("Collection", CollectionsSchema);