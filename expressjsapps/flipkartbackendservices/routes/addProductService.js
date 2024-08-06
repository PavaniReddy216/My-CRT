//es7 style
import express from "express";
import Product from "../model/product.js";
const router=express.Router();

//rest ful logic
router.post("/rest/newProduct",async(req,res) =>{
    try{
        const productinfo=new Product(req.body);
        const newProduct=await productinfo.save();
        res.json(newProduct);
        
    }
    catch(error){
        res.status(404),json({message:error.message});
    }
})
export default router;