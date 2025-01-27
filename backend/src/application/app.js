import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());


import {authRoutes} from "../interfaces/http/routes/User.route.js";
import container from "../infrastructure/di/container.js";
import cookieParser from "cookie-parser";
import errorHandler from "../utils/ErrorHandler.js";
app.use("/api/v1/user/", authRoutes(container))


//custom error handler to serve error in our way
app.use(errorHandler)

export default app;