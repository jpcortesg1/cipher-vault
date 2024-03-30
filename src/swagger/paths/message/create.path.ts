// Import dependences
// External
import { PathItem } from "swagger-jsdoc";

// Personal
import responseBase from "../response.base";

// Description to swagger path create message
const messageCreate: PathItem = {
  post: {
    tags: ["Message"],
    summary: "Create new encrypt message",
    description:
      "This route creates a new encrypted messag. The message is encrypted using a secure algorithm and is stored in the database for future use, return unique string.",
    requestBody: {
      $ref: "#/components/requestBodies/messageCreateRequestBody",
    },
    responses: {
      ...responseBase,
      "200": {
        description: "Message created",
      },
    },
  },
};

// Export module
export default messageCreate;
