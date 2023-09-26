const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email"],
    },
    phoneNo: {
        type: String,
        required: [true, "Please add the contact Phone number"],
    }
 },
 {
    timestamps: true,
 }
);

module.exports = mongoose.model("Contact", contactSchema);