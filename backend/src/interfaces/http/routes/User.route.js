import {Router} from 'express';
import {signup,verifyUser,signin,hasAccess,logout} from "../controllers/User.controller.js";


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
        (req,res,next)=>
       verifyUser(req,res,next,container)
    )

    router.route('/hasAccess').get(
        (req,res,next)=>
            hasAccess(req,res,next,container)
    )

    router.route('/signout').post(
        (req,res,next)=>
            logout(req,res,next,container)


    )


        
    return router;

}

export {authRoutes}