import {Product} from '../models/Product.js';
export const allPro=async(req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }

}
export const getProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const createProduct=async(req,res)=>{
    try{
        const created=await Product.create(req.body);
        res.status(201).json(created);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const updateProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const updated=await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!updated){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(updated);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Product.findByIdAndDelete(id);
        if(!deleted){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"Product deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}