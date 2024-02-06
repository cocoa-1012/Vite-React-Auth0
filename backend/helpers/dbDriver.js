// Import the mongoose module
const mongoose = require("mongoose");
require('dotenv').config();

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Wait for database to connect, logging an error if there is a problem
main = async () => {
    try {
        let db = await mongoose.connect(process.env.DB_URL);
        return db;
     
    }
    catch (err) {
        console.log(err);
    }
}
