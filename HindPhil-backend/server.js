// server.js
const express = require('express');
const cors = require('cors');
const stampRoutes = require('./routes/stampRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());

// API Routes
app.use('/api/stamps', stampRoutes);

// Serve static images (for your images folder)
app.use('/images', express.static('images'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
