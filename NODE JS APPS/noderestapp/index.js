import exp from 'constants';
import express from 'express' ;
import path from 'path';
import fs from "fs";
import {fileURLToPath} from 'url';
const app=express();




//global object logic
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//restful logic
//to get all users
app.get("/rest/getAllUser",(req,res) => {
    fstat.readFile(__dirname +"/"+"users.json",
    (err,data) =>{
        res.end(data)
    })
})



//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});




//how to get specific user info
app.get("/rest/getUserById/:id",(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json",
    (err,data)=>{
        const users=JSON.parse(data);
        const user=users["user"+req.params.id];
        res.end(JSON.stringify(user));
    })
})