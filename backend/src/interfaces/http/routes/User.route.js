import {Router} from 'express';
import {register,loginUserC,varifyUser} from "../controllers/User.controller.js";


function authRoutes(container){
    const router = Router();
    router.route('/signup').post(
        (req,res,next)=>
            register(req,res,next,container)
    )
    router.route('/signin').post(
        (req,res,next)=>
            loginUserC(req,res,next,container)
    )

    router.route('/varify').post(
        (req,res)=>
            varifyUser(req,res)
    )


        
    return router;

}

export {authRoutes}