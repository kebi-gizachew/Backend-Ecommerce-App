import {Order} from "../models/Order.js";
export const getOrder=async(req,res)=>{
    try{
        const {id}=req.params
        const order=await Order.find({user:id}).populate("items.product")
        if(!order){
            return res.status(404).json({message:"Order not found"});
        }
        res.status(200).json(order);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const createOrder=async(req,res)=>{
    try{
        const created=await Order.create(req.body)
        res.status(201).json(created)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}