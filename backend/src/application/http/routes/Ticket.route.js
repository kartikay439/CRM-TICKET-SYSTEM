import {Router} from 'express';
import {createTicket,fetchAllTickets} from "../controllers/Ticket.controller.js";
import {upload} from "../middleware/uploadMiddleware.js";

const router = Router();

router.post(
    '/createTicket',
    upload.fields([
        { name: 'productImage', maxCount: 1 },
        { name: 'uploadInvoice', maxCount: 1 }
    ]),
    (req, res, next) => {
        createTicket(req, res, next);
    }
);

router.get(
    '/fetchAllTickets',
    (req, res, next) => {
      fetchAllTickets(req, res, next);
    }
);





export default router;