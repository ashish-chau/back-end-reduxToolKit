const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const userLoginRoutes = require('./routes/userLoginRoute');
const errorHandler = require('./middelware/errorHandler');

dotenv.config();

const app = express();
app.use(bodyParser.json()); // Parse JSON requests


app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use('/api', productRoutes); // Use product routes
app.use("/api", userRoutes);
app.use("/api/users", userLoginRoutes); // Use User Routes

// Global error handler middleware
app.use(errorHandler);

// Start Server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
