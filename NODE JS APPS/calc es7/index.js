//express module
import exp from 'constants';
import express from 'express' ;
import path from 'path';
import {fileURLToPath} from 'url';
const app=express();

//global object logic
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//middleware logic
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//connect to html
app.get("/",(req,res) =>{
    res.sendFile(__dirname+"html/"+"cal.html");
})


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.post('/operation',(req,res) =>{
    //request data gathering logic
    const fnum=Number(req.body.FIRSTNUMBER);
    const snum=Number(req.body.SECONDNUMBER);
    const ca=req.body.calc;
    
//BUSINESS LOGIC

if(ca=="SUM"){
    res.end(ca +" is "+(fnum+snum) );

}else if(ca=="SUB"){
    res.end(ca +" is "+(fnum-snum));
}else if(ca=="MUL"){
    res.end(ca +" is "+(fnum*snum));
}
else if(ca=="DIV"){
    res.end(ca +"  is "+(fnum/snum));

}else{
    res.end("check once")

}
})