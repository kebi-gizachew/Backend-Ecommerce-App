import express from "express";
import {getOrder,createOrder } from "../controllers/orderController.js";
export const router=express.Router();
router.route("/:id").get(getOrder);
router.route("/").post(createOrder);

