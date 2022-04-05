const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not a valid email address");
            }
        }
    },
    mNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    carts: Array,
    userRole: String,
    activeUser: {
        type: Boolean,
        default: false
    },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;