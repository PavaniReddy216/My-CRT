//es7 style
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import messagRoutes from './routes/messages.js';

const app = express();

//middeleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//database logic
mongoose.connect("mongodb://127.0.0.1:27017/chatappwdb")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

//router logic
app.use('/chatapp/user', userRoutes);
app.use('/chatapp/msg', messagRoutes);

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000!!!");
})









