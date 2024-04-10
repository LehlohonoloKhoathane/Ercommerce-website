const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//registering the user
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register User...")
});

module.exports = {
    registerUser
};