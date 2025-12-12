import {removeCart,createCart,getCart} from "../controller/cartController.js";
import express from "express";
export const cartRoutes=express.Router()
cartRoutes.route("/:id").get(getCart)
cartRoutes.route("/add").post(createCart)
cartRoutes.route("/remove/:id").post(removeCart) 