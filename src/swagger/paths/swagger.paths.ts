// Import dependences
// External
import { Paths } from "swagger-jsdoc";

// Personal
import apiKeyPaths from "./apiKey/apiKey.paths";
import messagePaths from "./message/message.path";

// This file have all components of swagger configuration
const pathsSwagger: Paths = {
  ...apiKeyPaths,
  ...messagePaths,
};

export default pathsSwagger;
