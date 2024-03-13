// Import dependences
// External
import { Router } from "express";

// Personal
import { validateSchema } from "../middlewares/schema/schema.middleware";
import {
  createApiKeySchema,
  refreshApiKeySchema,
} from "../schemas/apiKey/apiKey.schema";
import { create, refresh } from "../controllers/apiKey/apiKey.controller";
import {
  emailHaveApiKey,
  existApiKeyWithEmail,
} from "../middlewares/apiKey/apiKey.middleware";

// Create main router
const apiKeyRouter = Router();

// Create api key route
apiKeyRouter.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createApiKeySchema),
  emailHaveApiKey,
  create
);

// Refresh api key route
apiKeyRouter.post(
  "/refresh",
  (req, res, next) => validateSchema(req, res, next, refreshApiKeySchema),
  existApiKeyWithEmail,
  refresh
);

// Export router
export default apiKeyRouter;
