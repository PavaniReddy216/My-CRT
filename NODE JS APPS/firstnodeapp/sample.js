//Asynchronous code execution
//to get data from a file
import fs from "fs";  //file system
console.log("first")
fs.readFile("aboutdiet.txt",(err,data) =>{
    if(data){
        console.log(data.toString())//to covert to string

    }
    else{
        console.log(err)
    }
})
console.log("third");
