const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = () => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}

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

    //check if user exists
    const userExists = await User.findOne({email: email})
    if (userExists){
        res.status(400);
        throw new Error("Email has already been registered");
    }

    //creating new user
    const user = await User.create({
        name, 
        email,
        password
    });

    //Generate Token
    const token = generateToken(user._id)

    if (user) {
        const { _id, name, email, role } = user;
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            secure: true,
            sameSite: "none"
        });
        //Send user data
        res.status(201).json({
            _id, name, email, role, token,
        });

    } else {
        res.status(400);
        throw new Error("Invalid user data")
    }
    
    res.send("Register User...")
});

module.exports = {
    registerUser
};