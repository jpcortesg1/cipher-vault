// Import modules
// External
import express from "express";

// Crete app
const app = express();

// Create a route
app.get("/", (_, res) => {
  res.send("Hello World");
});

// Get port
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});