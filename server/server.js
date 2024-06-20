import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import blogRouter from "./src/routes/blog.routes.js"
import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./src/config/db.config.js"

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes defined in routes.js
app.use('/api/v1', blogRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
    connectToDb();
  }
});