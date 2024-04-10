const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            trim: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email",
            ],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minLength: [6, "Password must be up to 6 characters"],
            //maxLength: [23, "Password must not be more than 23 characters"],
        },
        role: {
            type: String,
            required: [true],
            default: "customer",
            enum: ["customer", "admin"],
        },
        photo: {
            type: String,
            required: [true, "Please add a photo"],
            default: "https://www.hiclipart.com/free-transparent-background-png-clipart-pfudy",
        },
        phone: {
            type: String,
            default: "+27",
        },
        address: {
            type: Object,
            //address, state, country
        }
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;