// Import dependences
// External
import { NextFunction, Request, Response } from "express";

function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

const expiredAtNowTwoMonths = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get data
    const { expireAt } = req.body;

    if (!expireAt) {
      return next();
    }

    const today = Date.now();
    const twoMonths = Date.now() + 2 * 30 * 24 * 60 * 60 * 1000;

    if (expireAt < today || expireAt > twoMonths) {
      return res.status(400).json({
        message: `The expiration date must be between ${new Date(
          today
        )} and ${new Date(twoMonths)}`,
        error: "Bad Request",
        status: 400,
      });
    }
    return next();
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
export default expiredAtNowTwoMonths;
