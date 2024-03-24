// Import dependences
// External
import { PathItem } from "swagger-jsdoc";

// Personal
import responseBase from "../response.base";

// Description to swagger of path create api key
const apiKeyCreate: PathItem = {
  post: {
    tags: ["API Key"],
    summary: "Create a new API key",
    description:
      "This route creates a new API key for a specified email address. The key is generated using a secure algorithm and is stored in the database for future use.",
    requestBody: {
      $ref: "#/components/requestBodies/apiKeyRequestBody",
    },
    responses: {
      ...responseBase,
      "200": {
        description: "API Key created",
      },
    },
  },
};

// Export module
export default apiKeyCreate;
