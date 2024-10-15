// index.js
const express = require('express');
const connectDB = require('./config/database');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Define API routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});