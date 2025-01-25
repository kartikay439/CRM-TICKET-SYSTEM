import {Router} from 'express';
import {signup,verifyUser,signin} from "../controllers/User.controller.js";


function authRoutes(container){
    const router = Router();


    router.route('/signup').post(
        (req,res,next)=>
            signup(req,res,next,container)
    )

    router.route('/signin').post(
        (req,res,next)=>
            signin(req,res,next,container)
    )
    
    router.route('/verify').post(
       verifyUser
    )


        
    return router;

}

export {authRoutes}