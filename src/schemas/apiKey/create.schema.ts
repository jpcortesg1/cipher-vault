// Import dependences
// External
import Joi from "joi";

// Defined interface
export interface CreateApiKey {
  email: string;
  description: string;
  expireAt: Date;
}

// Create schema
const createApiKeySchema = Joi.object<CreateApiKey>({
  email: Joi.string().email().required(),
  description: Joi.string().required(),
  expireAt: Joi.date()
    .required()
    .min(Date.now())
    .max(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000),
});

// Export module  
export default createApiKeySchema;