const express = require("express");

const app = express();
app.use(express.json());

// Register User
app.post("/register", (req, res) => {
    res.json({
        message: "User Registered Successfully"
    });
});

// Login User
app.post("/login", (req, res) => {
    res.json({
        message: "Login Successful"
    });
});

// User Profile
app.get("/profile", (req, res) => {
    res.json({
        username: "Malay",
        role: "User"
    });
});

app.listen(4001, () => {
    console.log("User Service running on port 4001");
});