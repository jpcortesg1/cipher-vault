// Import dependences
// External
import { Router } from "express";

// Personal
// Middlewares
import { validateSchema } from "../middlewares/schema/schema.middleware";
import {
  emailHaveApiKey,
  existApiKeyWithEmail,
} from "../middlewares/apiKey/apiKey.middleware";
import { expiredAtNowTwoMonths } from "../middlewares/date/data.middleware";

// Schemas
import {
  createApiKeySchema,
  refreshApiKeySchema,
  deleteApiKeySchema,
} from "../schemas/apiKey/apiKey.schema";

// Controllers
import {
  create,
  refresh,
  destroy,
} from "../controllers/apiKey/apiKey.controller";

// Create main router
const apiKeyRouter = Router();

// Create api key route
apiKeyRouter.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createApiKeySchema),
  expiredAtNowTwoMonths,
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

// Delete api key route
apiKeyRouter.delete(
  "/",
  (req, res, next) => validateSchema(req, res, next, deleteApiKeySchema),
  existApiKeyWithEmail,
  destroy
);

// Export router
export default apiKeyRouter;
