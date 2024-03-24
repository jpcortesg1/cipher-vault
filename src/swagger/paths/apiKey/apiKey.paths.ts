// Import dependences
// External
import { Paths } from "swagger-jsdoc";

// Personal
import apiKeyCreate from "./create.path";
import apiKeyRefresh from "./refresh.path";
import apiKeyDelete from "./delete.path";

// This file have all paths of api key
const apiKeyPaths: Paths = {
  "/api-key": {
    ...apiKeyCreate,
    ...apiKeyDelete,
  },
  "/api-key/refresh": {
    ...apiKeyRefresh,
  },
};

// Export module
export default apiKeyPaths;
