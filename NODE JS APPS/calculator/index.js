//express module
//import express from 'express' 
//this is es7 feature
const express =require("express");      //this is es6 feature
const bodyparser=require('body-parser')
const app=express();


//middleware logic
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//connect to html
app.get("/cal",(req,res) =>{
    res.sendFile(__dirname+"/"+"cal.html");
})


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.post('/process',(req,res) =>{
    //request data gathering logic
    const fnum=Number(req.body.FIRSTNUMBER);
    const snum=Number(req.body.SECONDNUMBER);
    const op=req.body.operation;
    
//BUSINESS LOGIC

if(op=="SUM"){
    res.end(op +" is "+(fnum+snum) );

}else if(op=="SUB"){
    res.end(op +" is "+(fnum-snum));
}else if(op=="MUL"){
    res.end(op +" is "+(fnum*snum));
}
else if(op=="DIV"){
    res.end(op +"  is "+(fnum/snum));

}else{
    res.end("check once")

}
})