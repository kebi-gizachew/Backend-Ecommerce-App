import {removeCart,createCart,getCart} from "../controllers/cartController.js";
import express from "express";
export const router=express.Router()
router.route("/:id").get(getCart)
router.route("/add").post(createCart)
router.route("/remove/:id").post(removeCart) 