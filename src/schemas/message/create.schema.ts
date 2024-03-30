// Import dependences
// External
import Joi from "joi";

// Define interface
export interface CreateMessage extends Document {
  content: string;
  apiKey: string;
  passwordUser?: string;
  expireAt?: Date;
}

// Create schema
const createMessageSchema = Joi.object<CreateMessage>({
  content: Joi.string().required().description("The message to encrypt"),
  apiKey: Joi.string().required().description("API key to use API"),
  passwordUser: Joi.string().description("Aditional password of user"),
  expireAt: Joi.date()
    .min(Date.now())
    .max(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000)
    .description("The expiration date and time for the message encrypted"),
});

// Expor module
export default createMessageSchema;
