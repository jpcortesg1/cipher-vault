// Import dependences
// External
import Joi from "joi";

// Defined interface
export interface CreateApiKey {
  email: string;
  description: string;
  expireAt?: Date;
}

// Create schema
const createApiKeySchema = Joi.object<CreateApiKey>({
  email: Joi.string()
    .email()
    .required()
    .description("The email address associated with the API key"),
  description: Joi.string()
    .required()
    .description("A brief description of the API key"),
  expireAt: Joi.date().description(
    "The expiration date and time for the API key"
  ),
});

// Export module
export default createApiKeySchema;
