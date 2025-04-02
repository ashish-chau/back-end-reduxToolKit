require("dotenv").config();
const mysql = require("mysql2");
console.log("DB_USER:", process.env.DB_USER);
// MySQL connection configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Establish the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    process.exit(1); // Stop execution if connection fails
  }
  console.log("✅ Connected to MySQL");
});

module.exports = connection; // Export the connection object for reuse
