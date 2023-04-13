import dotenv from "dotenv";

import { connectDatabase } from "./config/database";
import { initializeExpressServer } from "./config/express";

(async function ():Promise<void> {
	dotenv.config();
	await initializeExpressServer();
	connectDatabase();
})();