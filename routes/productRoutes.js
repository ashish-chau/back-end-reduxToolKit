const express = require('express');
const router = express.Router();
const connection = require('../config/db'); // Import the database connection

// Route to fetch all products
router.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products'; // SQL query to get all products

  connection.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching data from MySQL:', err.message);
      return res.status(500).json({ status: "ERROR", message: "Failed to fetch data from MySQL" });
    }

    // Customize the success response
    res.status(200).json({
      status: "SUCCESS",
      message: `Here you go! You've received ${results.length} products. If you need more, just ask for it.`,
      products: results
    });
  });
});

module.exports = router; // Export the routes for use in index.js
