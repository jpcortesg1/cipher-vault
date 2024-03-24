// Import dependences
// External
import Joi from "joi";

// Defined interface
export interface refreshApiKey {
  email: string;
  apiKey: string;
}

// Create schema
const refreshApiKeySchema = Joi.object<refreshApiKey>({
  email: Joi.string()
    .email()
    .required()
    .description("Email address to refresh the API key"),
  apiKey: Joi.string().required().description("API key to refresh"),
});

// Export module
export default refreshApiKeySchema;
