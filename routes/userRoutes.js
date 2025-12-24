import {createUser, verifyUser,getUser} from "../controller/userController.js";
import {auth} from '../middleware/authentication.js'
import express from "express";
export const userRoutes=express.Router();
userRoutes.route("/register").post(createUser);
userRoutes.route("/login/:id").get(verifyUser);
userRoutes.get("/get",auth,getUser)