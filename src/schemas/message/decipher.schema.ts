// Import dependences
// External
import Joi from "joi";

// Define interface
export interface DecipherMessage {
  uniqueString: string;
  passwordUser?: string;
  apiKey: string;
}

// Create schema
const decipherMessageSchema = Joi.object<DecipherMessage>({
  uniqueString: Joi.string().required().description("The unique string of message"),
  passwordUser: Joi.string().description("Aditional password of user"),
  apiKey: Joi.string().required().description("API key to use API"),
});

// Expor module
export default decipherMessageSchema;