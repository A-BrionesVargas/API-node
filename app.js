import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import { FRONTEND_URL } from "./config.js";


const allowedOrigins = [
    FRONTEND_URL,
    "http://192.168.1.10:3000"
];


const app = express();

app.use(
    cors({
        credentials: true,
        origin: function (origin, callback) {
            // Verifica si la IP/URL está en la lista permitida
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    })
);


app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default app;