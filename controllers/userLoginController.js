const connection = require("../config/db"); // Import DB connection
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Login
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const query = "SELECT * FROM users WHERE email = ?";
  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error("❌ Error fetching user:", err.message);
      return res.status(500).json({ status: "ERROR", message: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(400).json({ status: "ERROR", message: "User not found!" });
    }

    const user = results[0];

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "ERROR", message: "Invalid password!" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user.id, email: user.email }, "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "Login successful!",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
};

module.exports = { loginUser };
