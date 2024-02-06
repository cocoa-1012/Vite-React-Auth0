const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameItem = new mongoose.Schema({
  gameId: { type: mongoose.Types.ObjectId, required: true },
  yesVote: [{ type: mongoose.Types.ObjectId }],
  noVote: [{ type: mongoose.Types.ObjectId }]

});

const EventSchema = new Schema({
  createdAt: { type: Date, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  scheduledDate: { type: Date, required: true },
  location: { type: String, required: true },
  guests: [{ type: mongoose.Types.ObjectId }],
  gameList: [{ type: gameItem }],
  finalized: { type: Boolean, default: false },
  finalizedAt: { type: Date, default: null },         // Only set when finalized = true
  gamePicked: { type: mongoose.Types.ObjectId },     // ObjectId corresponds to _id in games.js
  status: { type: String, enum: ['scheduled', 'cancelled', 'archived'] },
  cancelledAt: { type: Date, default: null },        // Only set when status = cancelled
  cancelNote: { type: String, default: null }        // Default value: null. Only set when status = cancelled and user adds a note
});


module.exports = mongoose.model("Event", EventSchema);