// Import dependences
// External
import { Components } from "swagger-jsdoc";

// Personal
import convertSchemaToRequestBody from "../utils/swagger/convertSchemaToRequestBody";
import createApiKeySchema from "../schemas/apiKey/create.schema";

// This file have all components of swagger configuration
const componentsSwagger: Components = {
  requestBodies: {
    apiKeyRequestBody: convertSchemaToRequestBody(createApiKeySchema),
  },
}

export default componentsSwagger;