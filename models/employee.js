const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    level: String,
})
// compile model from schema
// mongoose.model(COLLECTION NAME, SCHEMA NAME)
module.exports = mongoose.model("records", employeeSchema);
