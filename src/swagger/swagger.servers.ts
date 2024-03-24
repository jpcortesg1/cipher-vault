// Import dependences
// External
import { Server } from "swagger-jsdoc";

// This file have all info of swagger configuration
const swaggerServers: Server[] = [
  {
    url: "https://api-chipher-vault.jpcortesg.online/api/v1/",
    description: "Production server",
  },
  {
    url: "http://localhost:5000/api/v1/",
    description: "Development server",
  },
];

export default swaggerServers;
