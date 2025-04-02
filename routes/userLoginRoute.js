const express = require("express");
const { loginUser } = require("../controllers/userLoginController");

const router = express.Router();

router.post("/login", loginUser); // Login Route

module.exports = router;
