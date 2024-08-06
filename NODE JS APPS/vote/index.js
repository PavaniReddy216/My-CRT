//express module
//import express from 'express' 
//this is es7 feature
const express =require("express");      //this is es6 feature
const bodyparser=require('body-parser')
const app=express();

//connect to html
app.get("/vote",(req,res) =>{
    res.sendFile(__dirname+"/"+"vote.html");
})

//middleware logic
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.post('/process',(req,res) =>{
    //request data gathering logic
    const uname=req.body.NAME;
    const age=req.body.AGE;


//business logic(comparing)
if( age>18){
    res.end(uname+" Your eligible to vote");
}else{
    res.end(uname+"your not eligible for vote");
}
})