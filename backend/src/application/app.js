import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


import {authRoutes} from "../interfaces/http/routes/User.route.js";
import container from "../infrastructure/di/container.js";
app.use("/api/v1/user/", authRoutes(container))

export default app;