const connection = require('../config/db');

// Get All Products
const getProducts = (req, res) => {
  const query = 'SELECT * FROM products';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching products:', err.message);
      return res.status(500).json({ status: "ERROR", message: "Failed to fetch products" });
    }

    res.status(200).json({
      status: "SUCCESS",
      message: `Here you go! You've received ${results.length} products.`,
      products: results
    });
  });
};

module.exports = { getProducts };
