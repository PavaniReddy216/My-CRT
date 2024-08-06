//express module
//import express from 'express' 
//this is es7 feature
const express =require("express");      //this is es6 feature
const app=express();

//connect to html
app.get("/login",(req,res) =>{
    res.sendFile(__dirname+"/"+"login.html");
})


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.get('/process',(req,res) =>{
    //request data gathering logic
    const uname=req.query.username;
    const pwd=req.query.password;


//business logic(comparing)
if((username="admin") && (password="Admin@123")){
    res.end(uname+" welcome to diet");
}else{
    res.end(uname+"please check the details once");
}
})