const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {

    try{
        const token = res.cookies.token
        if(!token){
            res.status(401);
            throw new Error("Not Authorized, please login.");
        }
        // Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        //get user id from the token
        const user = await User.findById(verified._id).select("-password");
        if(!user){
            res.status(401);
            throw new Error("User not found");
        }
        req.user = user
        next()

    }catch (error) {
        res.status(401);
    throw new Error("Not authorized, please login.");
    }
});

modules.exports = {
    protect
}