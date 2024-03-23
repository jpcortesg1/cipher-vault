// This utility convert any schema oj Joi -> Joi.object<any interface>
// To a requestBody object for Swagger. -> RequestBody
// This is useful for Swagger documentation.
// This utility is used in src/swaggerOptions.ts

import { ObjectSchema } from "joi";
import { RequestBody } from "swagger-jsdoc";

const convertSchemaToRequestBody = (schema: ObjectSchema): RequestBody => {
  // Get structure of schema
  const schemaStructure = schema.describe();

  // Map properties of schema to requestBody schema
  const properties: Record<string, any> = {}; // Record<string, any> is equivalent to { [key: string]: any }
  const requireds: string[] = [];

  // Iterate over keys of schemaStructure
  for (const key in schemaStructure.keys) {
    if (!Object.prototype.hasOwnProperty.call(schemaStructure.keys, key))
      continue; // Check if key is in schemaStructure.keys
    const prop = schemaStructure.keys[key];

    // Build properties object and requireds array
    if (prop?.flags?.presence === "required") requireds.push(key);
    properties[key] = {
      type: prop.type === "date" ? "string" : prop.type,
      ...(prop?.flags?.description && { description: prop.flags.description }),
      ...(prop.type === "date" && { format: "date-time" }),
      ...(prop?.rules?.find((rule: any) => rule.name === "email") && {
        format: "email",
      }),
    };
  }

  // Build requestBody object
  const requestBody: RequestBody = {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties,
          ...(requireds.length > 0 && { required: requireds }),
        },
      },
    },
  };

  // Return requestBody
  return requestBody;
};

// Export module
export default convertSchemaToRequestBody;
