import jwt from 'jsonwebtoken'
import {User} from '../models/User.js'
export const auth=async(req,res,next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(" ")[1]
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            req.user=await User.findById(decode.id).select("-password")
            return next()
        }catch(err){
            return res.status(401).json({message:"Not authorized."})
        }
    }
    if(!token){
        return res.status(401).json({message:"No token."})
    }
}