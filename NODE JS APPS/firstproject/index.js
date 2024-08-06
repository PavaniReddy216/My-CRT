//http protocol
import http from "http";
//hyper text transfer protocol

//server logic
http.createServer((req,res) =>{
    res.end("welcome to node js world!!!")
}).listen(4000);


console.log("server running on port 4000!!!")