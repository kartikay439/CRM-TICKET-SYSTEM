import {Router} from 'express';
import {register} from "../controllers/User.controller.js";


function authRoutes(container){
    const router = Router();
    router.route('/signup').post(
        (req,res,next)=>
            register(req,res,next,container)
    )
    return router;

}

export {authRoutes}