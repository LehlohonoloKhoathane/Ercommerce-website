require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Middlewares
app.use(
    cors({
        origin: ["https:///localhost:3000", "https://studious-bassoon-4j7q54q6rvpqc7954.github.dev/"],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}));

// Routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("Home Page...");
});

// module.exports = {
//     registerUser,
// }

//Error Middleware 
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
});
