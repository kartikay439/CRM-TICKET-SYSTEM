import {Router} from 'express';
import {createTicket} from "../controllers/Ticket.controller.js";

const router = Router();
router.post('/createTicket',
    (req, res,next) => {
        createTicket(req, res,next)

    }
)


export default router;