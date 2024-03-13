// Import dependences
// External
import { Router } from "express";

// Personal
import ApiKeySchema from "../models/ApiKey.models";
import validateSchema from "../middlewares/schemas/validate.middleware";
import createApiKeySchema from "../schemas/apiKey/create.schema";

// Create main router
const apiKeyRouter = Router();

// Create prove route main
apiKeyRouter.post(
  "/",
  (req, res, next) => validateSchema(req, res, next, createApiKeySchema),
  async (req, res) => {
    try {
      const data = req.body;
      const randomKey = Math.random().toString(36).substring(2, 15);
      const newApiKey = new ApiKeySchema({ ...data, key: randomKey });
      const apiKey = await newApiKey.save();
      const { key } = apiKey;
      res
        .json({
          message: "Get API Key",
          status: 200,
          data: {
            key,
          },
        })
        .status(200);
    } catch (error: any) {
      console.error(error);
      res
        .json({
          message: "Internal server error",
          status: 500,
          error: error.message,
        })
        .status(500);
    }
  }
);

// Export router
export default apiKeyRouter;
