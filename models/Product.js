import mongoose from "mongoose";
const prod=new mongoose.Schema({
    name:{type:String,required:true},
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true
    },
    inStock:{
        type:Boolean,
        required:true,
        default:true
    }
},{
    timestamps:true
})
export const Product=mongoose.model("Product",prod
)