const asyncHandler = require("express-async-handler");

//registering the user
const registerUser = asyncHandler(async (req, res) => {
    res.send("Register User...")
});

module.exports = {
    registerUser
};