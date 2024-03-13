// Import dependences
// External
import { NextFunction, Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// This middleware is used to check if the api key exist with the email
const existApiKeyWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const data = req.body;
    const { apiKey, email } = data;

    // Check if the email have an api key
    const apiKeyFound = await ApiKey.findOne({ key: apiKey, email });
    if (!apiKeyFound) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The API key does not exist",
      });
    }

    // Set value and next
    req.body = data;
    next();
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      status: 500,
      error: error.message,
    });
  }
};

// Export module
export default existApiKeyWithEmail;
