const connection = require("../config/db");
const bcrypt = require("bcryptjs");

// ✅ Register User API
exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // ✅ Validate fields
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // ✅ Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match!" });
  }

  // ✅ Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // ✅ Insert user into MySQL
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  connection.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) {
      console.error("❌ Error inserting user:", err.message);
      return res.status(500).json({ message: "Database error!" });
    }
    res.status(201).json({ message: "User registered successfully!" });
  });
};
