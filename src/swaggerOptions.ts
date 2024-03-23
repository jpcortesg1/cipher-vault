import { OAS3Options, PathItem } from "swagger-jsdoc";
import convertSchemaToRequestBody from "./utils/swagger/convertSchemaToRequestBody";
import createApiKeySchema from "./schemas/apiKey/create.schema";

const apiKeyRoute: PathItem = {
  post: {
    tags: ["API Key"],
    summary: "Create a new API key",
    description:
      "This route creates a new API key for a specified email address. The key is generated using a secure algorithm and is stored in the database for future use.",
    requestBody: {
      $ref: "#/components/requestBodies/apiKeyRequestBody",
    },
    responses: {
      "200": {
        description: "API Key created"
      },
      "400": {
        description: "Bad request"
      },
      "500": {
        description: "Internal server error"
      }
    }
  },
};

const swaggerOptions: OAS3Options = {
  apis: ["src/routes/*.ts"],
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Cipher Vault",
      description:
        "The Cipher Vault API is a secure encryption platform that provides tools for safeguarding and managing sensitive information. It enables users to encrypt and decrypt messages, generate and manage API keys for secure access to resources, and set self-destruct timers for confidential messages. This API offers an additional layer of security for communication and data storage in online applications and services.",
      contact: {
        email: "jpcortesg@hotmail.com",
        name: "Juan Pablo Cortes",
      },
      version: "1.0.0",
    },
    tags: [
      {
        name: "API Key",
        description:
          "This tag includes routes for managing API keys, allowing users to create new keys, refresh existing keys, and delete keys as needed.",
      },
    ],
    paths: {
      "api-key": {
        ...apiKeyRoute,
      },
    },
    components: {
      requestBodies: {
        apiKeyRequestBody: convertSchemaToRequestBody(createApiKeySchema),
      },
    },
    servers: [
      {
        url: "https://api-chipher-vault.jpcortesg.online",
        description: "Production server",
      },
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
};

export default swaggerOptions;
