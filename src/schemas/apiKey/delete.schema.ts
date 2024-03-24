// Import dependences
// External
import Joi from "joi";

// Defined interface
export interface deleteApiKey {
  email: string;
  apiKey: string;
}

// Create schema
const deleteApiKeySchema = Joi.object<deleteApiKey>({
  email: Joi.string().email().required().description("Email of user"),
  apiKey: Joi.string().required().description("Api key of user to delete"),
});

// Export module  
export default deleteApiKeySchema;