import { Cart } from "../models/Cart.js";
export const getCart=async(req,res)=>{
    try{
        const {id}=req.params
        const cart=await Cart.find({user:id}).populate("items.product")
        if(!cart){
            return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json(cart);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const createCart=async(req,res)=>{
    try{
        const created=await Cart.create(req.body)
        res.status(201).json(created)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const removeCart=async(req,res)=>{
    try{
        const {id}=req.params
        const deleted=await Cart.findByIdAndDelete(id)
        if(!deleted){
            return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json({message:"Cart deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}