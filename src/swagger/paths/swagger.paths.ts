// Import dependences
// External
import { Paths } from "swagger-jsdoc";

// Personal
import apiKeyPaths from "./apiKey/apiKey.paths";

// This file have all components of swagger configuration
const pathsSwagger: Paths = {
  ...apiKeyPaths,
};

export default pathsSwagger;
