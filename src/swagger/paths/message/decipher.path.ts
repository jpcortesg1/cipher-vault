// Import dependences
// External
import { PathItem } from "swagger-jsdoc";

// Personal
import responseBase from "../response.base";

// Description to swagger path create message
const messageDecipher: PathItem = {
  post: {
    tags: ["Message"],
    summary: "Decipher message",
    description:
      "This route decipher a message. The message is decrypted using a secure algorithm and is returned in plain text.",
    requestBody: {
      $ref: "#/components/requestBodies/messageDecipherRequestBody",
    },
    responses: {
      ...responseBase,
      "200": {
        description: "Message deciphered",
      },
    },
  },
};

// Export module
export default messageDecipher;