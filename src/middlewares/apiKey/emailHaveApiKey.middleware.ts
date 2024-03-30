// Import dependences
// External
import { NextFunction, Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// This middleware is used to check if the email have an api key active
const emailHaveApiKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const data = req.body;
    const { email } = data;

    // Check if the email have an api key
    const apiKey = await ApiKey.findOne({ email });
    if (apiKey) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The email already have an API Key",
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
export default emailHaveApiKey;
