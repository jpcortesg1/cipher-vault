// Import dependences
// External
import { PathItem } from "swagger-jsdoc";

// Personal
import responseBase from "../response.base";

// Description to swagger of path delete api key
const apiKeyDelete: PathItem = {
  delete: {
    tags: ["API Key"],
    summary: "Delete an API key",
    description:
      "This route deletes an API key for a specified email address. The key is removed from the database and can no longer be used.",
    requestBody: {
      $ref: "#/components/requestBodies/apiKeyDeleteRequestBody",
    },
    responses: {
      ...responseBase,
      "200": {
        description: "API Key deleted",
      },
    },
  },
};

// Export module
export default apiKeyDelete;

