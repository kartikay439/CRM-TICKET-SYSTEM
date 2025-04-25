import { Router } from "express";
import {createClient, fetchAllClients} from "../controllers/Client.controller.js";

function clientRoutes() {
    const router = Router();

    // Create a new client
    router.route("/create").post(
        (req, res, next) => createClient(req, res, next)
    );

    // Fetch all clients for the logged-in user
    router.route("/all").get(
        (req, res, next) => fetchAllClients(req, res, next)
    );

    return router;
}

export default clientRoutes ;
