const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

router.post("/userRegister", registerUser); // Route for user registration

module.exports = router;
