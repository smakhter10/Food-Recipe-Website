const express = require("express");
const router = express.Router();
const { registerUser, loginUser, userProfile, logoutUser } = require("../controller/authConntrollers");
const cors = require('cors')

//Middleware
router.use(
    cors({
        credentials: true,
        origin: process.env.BASE_URL
    })
)


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", userProfile);

module.exports = router