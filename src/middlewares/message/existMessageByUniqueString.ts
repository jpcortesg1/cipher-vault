// Import dependences
// External
import { NextFunction, Request, Response } from "express";

// Personal
import Message from "../../models/message.model";

// This middleware validate if the message exist by unique string from request
const existMessageByUniqueString = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const { uniqueString } = req.body;

    // Check if the message exist
    const messageFound = await Message.findOne({
      uniqueString,
    });

    // If the message does not exist
    if (!messageFound) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The message does not exist",
      });
    }

    // Set value and next
    req.body = { ...req.body, messageFound };
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
export default existMessageByUniqueString;