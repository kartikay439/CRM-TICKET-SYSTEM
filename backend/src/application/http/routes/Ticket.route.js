import {Router} from 'express';
import {createTicket, fetchAllTicketsAdmin, fetchAllTicketsById} from "../controllers/Ticket.controller.js";
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
      fetchAllTicketsById(req, res, next);
    }
);

router.get(
    '/fetchAllTicketsAdmin',
    (req, res, next) => {
      fetchAllTicketsAdmin(req, res, next);
    }
);





export default router;