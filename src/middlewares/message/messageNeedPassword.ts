// Import dependences
// External
import { NextFunction, Request, Response } from "express";

// This middleware validate if the message need a password user
// Is necessary to use after existMessageByUniqueString middleware, or another middleware that set the messageFound value in request
const messageNeedPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const { messageFound, passwordUser } = req.body;

    // If the message need password
    if (messageFound.usePasswordUser && !passwordUser) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The message need a password",
      });
    }

    // If message not need password
    if (!messageFound.usePasswordUser && passwordUser) {
      return res.status(400).json({
        message: "Bad request",
        status: 400,
        error: "The message not need a password",
      });
    }

    // Next
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
export default messageNeedPassword;
