// Import dependences
// External
import { Tag } from "swagger-jsdoc";

// This file have all info of swagger configuration
const swaggerTags: Tag[] = [
  {
    name: "API Key",
    description:
      "This tag includes routes for managing API keys, allowing users to create new keys, refresh existing keys, and delete keys as needed.",
  },
  {
    name: "Message",
    description:
      "This tag includes routes for create encrypted messages, and decrypt messages.",
  },
];

export default swaggerTags;
