import {createUser, verifyUser} from "../controller/userController.js";
import express from "express";
export const userRoutes=express.Router();
userRoutes.route("/register").post(createUser);
userRoutes.route("/login/:id").get(verifyUser);