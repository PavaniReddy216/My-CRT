//express module
//import express from 'express' 
//this is es7 feature
const express =require("express");      //this is es6 feature
const app=express();

//connect to html
app.get("/signup",(req,res) =>{               //  /sign up is path or end point
    res.sendFile(__dirname+"/"+"signup.html");// __dirname which is used to commucicate with frontend part
})


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.get('/process',(req,res) =>{
    //request data gathering logic
    const uname=req.query.USERNAME;
    const pwd=req.query.PASSWORD;
    const gen=req.query.gender;
    const add=req.query.ADDRESS;
    const qual=req.query.qualification;

//business logic(comparing)
if((uname=="admin") && (pwd=="admin123") ){
    res.end(uname + " thank you for registering . your username is "+uname +". Your password is "+pwd+". your gender is "+gen+". your address is "+add+". your qualification is "+qual);
}else{
    res.end(uname + "please check the details once");
}
})