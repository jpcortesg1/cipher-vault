// Import dependences
// External
import { PathItem } from "swagger-jsdoc";

// Personal
import responseBase from "../response.base";

// Description to swagger of path refresh api key
const apiKeyRefresh: PathItem = {
  post: {
    tags: ["API Key"],
    summary: "Refresh an API key",
    description:
      "This route refreshes an API key for a specified email address. The key is generated using a secure algorithm and is stored in the database for future use.",
    requestBody: {
      $ref: "#/components/requestBodies/apiKeyRefreshRequestBody",
    },
    responses: {
      ...responseBase,
      "200": {
        description: "API Key refreshed",
      },
    },
  },
};

// Export module
export default apiKeyRefresh;
