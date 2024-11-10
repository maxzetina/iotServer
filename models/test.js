const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    string: String,
    array: Array,
    boolean: Boolean,
    number: Number,
})
// compile model from schema
// mongoose.model(COLLECTION NAME, SCHEMA NAME)
// make sure COLLECTION NAME is plural in mongodb
module.exports = mongoose.model("tests", testSchema);
