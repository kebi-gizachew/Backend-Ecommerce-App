import {createUser, verifyUser} from "../controllers/userController.js";
import express from "express";

export const router=express.Router();
router.route("/register").post(createUser);
router.route("login/:id").get(verifyUser);