import {User} from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const createUser=async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        const exist=await User.findOne({email})
        if (exist){
            res.status(400).json({message:"User already exists."})
        } 
        const hashed=await bcrypt.hash(password,10)

        const created=await User.create({
            name:name,
            email:email,
            password:hashed
        });
        const token=jwt.sign({id:created._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        })
        res.status(201).json({user:{name,email}, token});
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
export const getUser=async(req,res)=>{
    try{
    const user=await User.findById(req.user._id)
    if (user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(404).json({message:"User not found."})
    }

}catch(err){
    res.status(500).json({message:"error"})

}}