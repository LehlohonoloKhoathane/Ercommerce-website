const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//registering the user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //Validations
    if(!name || !email || !password){
        res.status(400)
        throw newError("Please fill in all required fields");
    }
    if(password.length < 6){
        res.status(400);
        throw newError("Password must be up to 6 characters");
    }
    
    res.send("Register User...")
});

module.exports = {
    registerUser
};