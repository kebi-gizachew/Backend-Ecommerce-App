import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
connectDB()
const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})