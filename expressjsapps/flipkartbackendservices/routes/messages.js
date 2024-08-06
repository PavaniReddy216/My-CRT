import express from 'express';
import send from '../model/message.js';
const router = express.Router();

// Define a route to handle sending messages
router.post('/rest/Send', async(req, res) => {
    try{
        const sendinfo = new send(req.body);
        const Send = await sendinfo.save();
        res.json(Send);
        res.send('User registered successfully');

    }
    catch(error)
    {
       res.status(404).json({message:error.message});
    }
});

export default router;

