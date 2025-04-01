const mysql = require("mysql2");

// MySQL connection configuration
const connection = mysql.createConnection({
  host: "49.207.10.13", // ✅ MySQL Host
  port: 3306, // ✅ MySQL Default Port, // Change to your MySQL server address
  user: "sa", // Change to your MySQL username
  password: "Password@123", // Change to your MySQL password
  database: "practicedb",
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
