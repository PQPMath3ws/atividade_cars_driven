import "express-async-errors";
import cors from "cors";
import express, { json } from "express";
import { IncomingMessage, Server, ServerResponse } from "http";

import { disconnectDatabase } from "./database";

import carsRouter from "../routes/carsRouter";
import handleErrorsMiddleware from "../middlewares/errorHandlerMiddleware";

const app = express();
let server:Server<typeof IncomingMessage, typeof ServerResponse>;

async function onShutDownServer():Promise<void> {
    if (server) {
        await disconnectDatabase();
        server.close(() => {
            process.exit(0);
        });
    }
}

export async function initializeExpressServer():Promise<void> {
    if (!server) {
        app.use(cors());
        app.use(json());

        app.use(carsRouter);
        app.use(handleErrorsMiddleware);

        server = app.listen(5000);
    }

    process.on("SIGTERM", async () => await onShutDownServer());
    process.on("SIGINT", async () => await onShutDownServer());
}