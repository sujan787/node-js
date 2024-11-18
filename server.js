const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes); // Base route for user-related operations

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
