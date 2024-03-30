// Import dependences
// External
import { Paths } from "swagger-jsdoc";

// Personal
import messageCreate from "./create.path";
import messageDecipher from "./decipher.path";

// This file have all paths of message
const messagePaths: Paths = {
  "/message": {
    ...messageCreate,
  },
  "/message/decipher": {
    ...messageDecipher,
  },
};

// Export module
export default messagePaths;
