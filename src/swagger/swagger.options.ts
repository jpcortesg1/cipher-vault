// Import dependences
// External
import { OAS3Options } from "swagger-jsdoc";

// Personal
import swaggerInfo from "./swagger.info";
import swaggerTags from "./swagger.tags";
import swaggerServers from "./swagger.servers";
import componentsSwagger from "./swagger.componentes";
import pathsSwagger from "./paths/swagger.paths";

// This file have all swagger configuration
const swaggerOptions: OAS3Options = {
  apis: ["src/routes/*.ts"],
  swaggerDefinition: {
    openapi: "3.0.0",
    info: swaggerInfo,
    servers: swaggerServers,
    tags: swaggerTags,
    components: componentsSwagger,
    paths: pathsSwagger,
  },
};

// Export module
export default swaggerOptions;
