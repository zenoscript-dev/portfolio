const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dbConnection = require('./config/db.config');
const blogRouter = require('./routes/blog.routes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes defined in routes.js
app.use('/api/v1', blogRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});