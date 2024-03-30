// Import dependences
// External
import { Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// Create function to refresh the api key
const destroy = async (req: Request, res: Response) => {
  try {
    // Get data
    const data = req.body;
    const { apiKey, email } = data;

    // Update API key
    await ApiKey.findOneAndDelete(
      { key: apiKey, email }
    );

    // Response
    res
      .json({
        message: "API key deleted successfully.",
        status: 200,
      })
      .status(200);
  } catch (error: any) {
    console.log(error);
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
export default destroy;
