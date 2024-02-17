const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: { type: String, required: true },
    refId: { type: String, required: true, unique: true, dropDups: true },
    release: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 10 },
    max: {
        playerCount: { type: Number },
        playTime: { type: Number }
    },
    min: {
        playerCount: {
            type: Number 
        },
        playTime: {
            type: Number, 
            // validate: {
            //     checkPlayTime,
            //     message: `Min play time should be < max play time`
            // }
        }
    },
    qualities: {
        complexity: { type: Number }
    }

});


// ListingSchema.pre('validate', (next) => {
//     const err = new mongoose.Error.ValidationError(this);

//     if (this.min.playerCount > this.max.playerCount) {
//         err.errors.rating = new mongoose.Error.ValidationError.ValidationError({
//             message: "Min player count must be lesser than max player count",
//             path: min.playerCount,
//             value: this.min.playerCount
//         });
//         next(err);
//     }
//     next();
// })

module.exports = mongoose.model("Listing", ListingSchema, 'bg_listings');