// Import dependences
// External
import { Components } from "swagger-jsdoc";

// Personal
import convertSchemaToRequestBody from "../utils/swagger/convertSchemaToRequestBody";
import createApiKeySchema from "../schemas/apiKey/create.schema";
import refreshApiKeySchema from "../schemas/apiKey/refresh.schema";
import deleteApiKeySchema from "../schemas/apiKey/delete.schema";

// This file have all components of swagger configuration
const componentsSwagger: Components = {
  requestBodies: {
    apiKeyRequestBody: convertSchemaToRequestBody(createApiKeySchema),
    apiKeyRefreshRequestBody: convertSchemaToRequestBody(refreshApiKeySchema),
    apiKeyDeleteRequestBody: convertSchemaToRequestBody(deleteApiKeySchema),
  },
}

export default componentsSwagger;