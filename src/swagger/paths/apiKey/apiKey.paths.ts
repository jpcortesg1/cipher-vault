// Import dependences
// External
import { Paths } from "swagger-jsdoc";

// Personal
import apiKeyCreate from "./create.path";

// This file have all paths of api key
const apiKeyPaths: Paths = {
  "/api-key": {
    ...apiKeyCreate,
  },
};

// Export module
export default apiKeyPaths;
