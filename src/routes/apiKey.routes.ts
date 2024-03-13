// Import dependences
// External
import { Router } from "express";

// Personal
import { validateSchema } from "../middlewares/schema/schema.middleware";
import { createApiKeySchema } from "../schemas/apiKey/apiKey.schema";
import { create } from "../controllers/apiKey/apiKey.controller";

// Create main router
const apiKeyRouter = Router();

// Create prove route main
apiKeyRouter.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createApiKeySchema),
  create
);

// Export router
export default apiKeyRouter;
