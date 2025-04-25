import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Update your CORS settings:
app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

import { authRoutes } from "./http/routes/User.route.js";
app.use("/api/v1/user", authRoutes());

import ticketsRoutes from "./http/routes/Ticket.route.js";
app.use("/api/v1/tickets", ticketsRoutes);

import clientsRoutes from "./http/routes/Client.route.js";
app.use("/api/v1/client", clientsRoutes());



import errorHandler from "../utils/ErrorHandler.js";
app.use(errorHandler);

export default app;
