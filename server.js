const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middelware/errorHandler');

dotenv.config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use('/api', productRoutes); // Use product routes

// Global error handler middleware
app.use(errorHandler);

// Start Server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
