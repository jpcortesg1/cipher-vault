// Import modules
// External
import express from "express";

// Personal
import router from "./routes/index.routes";
import connectDB from "./configuration/db";

// Crete app
const app = express();

// Connect to database
connectDB();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get port
const port = process.env.PORT || 5000;

// Use routes
app.use("/api/v1/", router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
