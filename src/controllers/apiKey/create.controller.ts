// Import dependences
// External
import { Request, Response } from "express";

// Personal
import ApiKey from "../../models/ApiKey.models";

// Create function
const create = async (req: Request, res: Response) => {
  try {
    // Get data
    const data = req.body;

    // Create API Key
    let apiKeyWord = "";
    for (let i = 0; i < 4; i++) {
      let randomString = Math.random().toString(36).substring(2, 8);
      apiKeyWord += i == 3 ? `${randomString}` : `${randomString}-`;
    }

    // Save API Key
    const newApiKey = new ApiKey({ ...data, key: apiKeyWord });
    const apiKey = await newApiKey.save();

    // Response
    const { key } = apiKey;
    res
      .json({
        message:
          "API key created successfully, please save it in a safe place and not share it with anyone.",
        status: 200,
        data: {
          apiKey: key,
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
};

// Export module
export default create;
