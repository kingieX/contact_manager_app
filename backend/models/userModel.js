const mongoose = require("mongoose");

// Schema for user registration
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already exist!"],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    }
}, {
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);

