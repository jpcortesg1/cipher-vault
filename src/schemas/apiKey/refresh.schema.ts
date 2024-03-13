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
  email: Joi.string().email().required(),
  apiKey: Joi.string().required(),
});

// Export module  
export default refreshApiKeySchema;