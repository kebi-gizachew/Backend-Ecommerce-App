import {User} from "../models/User.js";
export const createUser=async(req,res)=>{
    try{
        const created=await User.create(req.body);
        res.status(201).json(created);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export const verifyUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        if (!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({message:"User verified successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}