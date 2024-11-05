const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    string: String,
    array: Array,
    boolean: Boolean,
    number: Number,
})
// compile model from schema
// mongoose.model(COLLECTION NAME, SCHEMA NAME)
module.exports = mongoose.model("test", testSchema);
