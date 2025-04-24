import {Router} from 'express';
import {signup,verifyUser,signin,hasAccess,logout} from "../controllers/User.controller.js";


function authRoutes(){
    const router = Router();
// const  container = null

    router.route('/signup').post(
        (req,res)=>
            signup(req,res)
    )

    router.route('/signin').post(
        (req,res)=>
            signin(req,res)
    )
    
    router.route('/verify').post(
        (req,res)=>
       verifyUser(req,res)
    )

    router.route('/hasAccess').get(
        (req,res)=>
            hasAccess(req,res)
    )

    router.route('/signout').post(
        (req,res)=>
            logout(req,res)


    )


        
    return router;

}

export {authRoutes}