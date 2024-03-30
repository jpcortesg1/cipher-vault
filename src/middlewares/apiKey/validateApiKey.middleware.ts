// Import dependences
// External
import { NextFunction, Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// This middleware is used to check if the api key exist with the email
const validateApiKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const data = req.body;
    const { apiKey } = data;

    // Check if the email have an api key
    const apiKeyFound = await ApiKey.findOne({ key: apiKey });
    if (!apiKeyFound) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The API key does not exist",
      });
    }

    // Today
    const today = new Date();
    const { expireAt } = apiKeyFound;

    if (today > expireAt) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The API key has expired",
      });
    }

    // Set value and next
    req.body = data;
    next();
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      status: 500,
      error: error.message,
    });
  }
};

// Export module
export default validateApiKey;
