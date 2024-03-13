// Import dependences
// External
import { Schema, model } from "mongoose";

// Defined interface
export interface ApiKey extends Document {
  email: string;
  description: string;
  key: string;
  active: boolean;
  expireAt: Date;
}

// Create Api key schema
const ApiKeySchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    expireAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create model
const ApiKey = model<ApiKey>("ApiKey", ApiKeySchema);


// Export module
export default ApiKey;
