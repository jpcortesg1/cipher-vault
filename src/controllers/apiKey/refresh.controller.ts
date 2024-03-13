// Import dependences
// External
import { Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// Create function to refresh the api key
const refresh = async (req: Request, res: Response) => {
  try {
    // Get data
    const data = req.body;
    const { apiKey, email } = data;

    // Create new expireAt
    const expireAt = Date.now() + 2 * 30 * 24 * 60 * 60 * 1000;

    // Update API key
    await ApiKey.findOneAndUpdate(
      { key: apiKey, email },
      { active: true, expireAt }
    );

    // Response
    res
      .json({
        message: "API key refreshed for 60 days more correctly.",
        status: 200,
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
};

// Export module
export default refresh;
