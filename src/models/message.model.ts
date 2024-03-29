// Import dependences
// External
import { Schema, model } from "mongoose";

// Defined interface
export interface Message {
  content: string;
  uniqueString: string;
  expireAt: Date;
  usePasswordUser: boolean;
  keyStr: string;
  ivStr: string;
  passwordUser?: string;
}

// Create message schema
const MessageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    uniqueString: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    expireAt: {
      type: Date,
      required: true,
    },
    passwordUser: {
      type: String,
    },
    usePasswordUser: {
      type: Boolean,
      required: true,
    },
    keyStr: {
      type: String,
      required: true,
    },
    ivStr: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create model
const Message = model<Message>("Message", MessageSchema);

// Export module
export default Message;
