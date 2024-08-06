//es7 logic
import express from 'express';
import Mes from '../model/users.js';
const router = express.Router();
//Restful logic
router.post("/rest/mess",async(req,res)=>{
   
    try{
        const messinfo = new Mes(req.body);
        const mess = await messinfo.save();
        res.json(mess);
        res.send('User registered successfully');

    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
})
export default router;