// Import dependences
// External
import { Responses } from "swagger-jsdoc";

// Description to swagger of response base
const responseBase: Responses = {
  "400": {
    description: "Bad request",
  },
  "500": {
    description: "Internal server error",
  },
}

// Export module
export default responseBase;
