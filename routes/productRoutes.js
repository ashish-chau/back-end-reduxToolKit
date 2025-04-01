const express = require('express');
const router = express.Router();
const connection = require('../config/db'); // Import the database connection

// Route to fetch all products
router.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products'; // SQL query to get all products

  connection.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching data from MySQL:', err.message);
      return res.status(500).json({ error: 'Failed to fetch data from MySQL' });
    }

    // Send the fetched data as the API response
    res.status(200).json(results);
  });
});

module.exports = router; // Export the routes for use in index.js
