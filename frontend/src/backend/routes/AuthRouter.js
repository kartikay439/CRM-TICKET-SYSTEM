import express from 'express';
const router = express.Router();


router.post('/register', registerValidation,register);

router.post('/login', (req, res)=>{
    res.send('login success');
    });


module.exports=router;
export default router;