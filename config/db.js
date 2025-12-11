import mongoose from "mongoose";
export const connectDB=async()=>{
    try{
        console.log("Going to be connected");
    const connect=mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
}catch(err){
    console.log(err)
    process.exit(1)

}
}