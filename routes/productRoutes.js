const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productControllers');

router.get('/products', getProducts); // Route to fetch all products

module.exports = router;
