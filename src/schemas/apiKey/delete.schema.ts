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
  email: Joi.string().email().required(),
  apiKey: Joi.string().required(),
});

// Export module  
export default deleteApiKeySchema;