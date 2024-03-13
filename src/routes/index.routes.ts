// Import dependences
// External
import { Router } from "express";

// Personal
import apiKeyRouter from "./apiKey.routes";

// Create main router
const router = Router();

// Create prove route main
router.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

// Use routes
router.use("/api-key", apiKeyRouter);

// Export router
export default router;
