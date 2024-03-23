// Import modules
// External
import express from "express";
import swaggerOptions from './swaggerOptions';
import swaggerUi from 'swagger-ui-express';

// Personal
import router from "./routes/index.routes";
import connectDB from "./configuration/db";
import swaggerJsdoc from 'swagger-jsdoc';

// Crete app
const app = express();

// Configuration
// Connect to database
connectDB();

// Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get port
const port = process.env.PORT || 5000;

// Use routes
app.use("/api/v1/", router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
