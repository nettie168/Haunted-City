// config.js
import 'dotenv/config'; // Automatically loads .env variables

export default {
  ghostApiUrl: process.env.GHOST_API_URL || 'http://localhost:2368',
  ghostApiKey: process.env.GHOST_API_KEY || '',
  //port: process.env.PORT || 3000,
};