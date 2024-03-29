// Import modules
// External
import express from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

// Personal
import router from "./routes/index.routes";
import connectDB from "./configuration/db";
import swaggerOptions from './swagger/swagger.options';

// Load environment variables
dotenv.config();

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
app.set("port", port);

// Use routes
app.use("/api/v1/", router); // Routes of API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger documentation

// Export app
export default app;
