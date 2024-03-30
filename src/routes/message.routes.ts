// Import dependences
// External
import { Router } from "express";

// Personal
// Middlewares
import { validateSchema } from "../middlewares/schema/schema.middleware";
import { validateApiKey } from "../middlewares/apiKey/apiKey.middleware";
import {
  existMessageByUniqueString,
  messageNeedPassword,
} from "../middlewares/message/message.middleware";
import { expiredAtNowTwoMonths } from "../middlewares/date/data.middleware";

// Schemas
import {
  createMessageSchema,
  decipherMessageSchema,
} from "../schemas/message/message.schema";

// Controller
import { create, decipher } from "../controllers/message/message.controller";

// Create router
const messageRouter = Router();

// Create message route
messageRouter.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createMessageSchema),
  expiredAtNowTwoMonths,
  validateApiKey,
  create
);

// Decipher message route
messageRouter.post(
  "/decipher",
  (req, res, next) => validateSchema(req, res, next, decipherMessageSchema),
  validateApiKey,
  existMessageByUniqueString,
  messageNeedPassword,
  decipher
);

// Export router
export default messageRouter;
