const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { use } = require("../routes/userRoute");
//const User = require("../models/userModel");

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

//Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    // Validate Request
    if (!email || !password) {
        res.status(400);
        throw new Error("Please add email or password");
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user){
        res.status(400);
        throw new Error("User does not exist.");
    }

    // User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // Generate Token
    const token = generateToken(user._id);
    if ( user && passwordIsCorrect){
        const newUser = await User.findOne({ email }).select("-password");
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            //secure: true,
            //samesite: none,
        });
        // Send user data
        res.status(201).json(newUser);
    } else {
        res.status(400);
        throw new Error("Invalid email or password")
    }

    //res.send("Login User...")
});

// logout user
const logout = asyncHandler (async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        //secure: true,
        //sametime: none,
    });
    res.status(200).json({message: "Successfully Logged Out"})
});

// Get user
const getUser = asyncHandler (async (req, res) => {
    const user = await User.findById(req.user._id).select("-password")
    if(user){
        res.status(200).json(user);
    }else {
        res.status(400);
        throw new Error("User Not found");
    }
});

// Get login status
const getLoginStatus = asyncHandler (async (req, res) => {
    const token = req.cookies.token;
    if(!token){
        return res.json(false)
    }
    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified){
        res.json(true)
    } else{
        res.json(false)
    }
});

// Update User
const updateUser = asyncHandler (async (req, res) => {
    const User = await User.findById(req.user._id);
    if(user){
        const { name, phone, address } = user;
        user.name = req.body.name || name;
        user.phone = req.body.phone || phone;
        user.address = req.body.address || address;

        const updatedUser = await user.save()
        res.status(200).json(updatedUser);
    } else {
        res.status(404);
        throw new Error("User not found")
    }
});

//update photo

const updatePhoto = asyncHandler (async (req, res) => {
    const { photo } = req.body;
    const user = await User.findById(req.user._id);
    user.photo = photo;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
});

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    getLoginStatus,
    updateUser,
    updatePhoto
};