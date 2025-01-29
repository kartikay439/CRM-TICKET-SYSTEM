import {Router} from 'express';
import {createTicket} from "../controllers/Ticket.controller.js";

const router = Router();
router.post('/createTicket',
    (req, res) => {
        createTicket(req, res)

    }
)


export default router;