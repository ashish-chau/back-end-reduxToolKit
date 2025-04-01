const express = require('express');
const app = express();
const cors = require('cors'); 
const productRoutes = require('./routes/productRoutes'); // Import product routes

const port = 5000; // Define the port to run the API on

app.use(cors());

// Use the routes in the Express app
app.use(productRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`✅ API Server running at http://localhost:${port}`);
});
