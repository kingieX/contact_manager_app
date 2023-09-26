const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

// route to register
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;

ggggggg

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