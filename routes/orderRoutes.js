import express from "express";
import {getOrder,createOrder } from "../controller/orderController.js";
export const orderRoutes=express.Router();
orderRoutes.route("/:id").get(getOrder);
orderRoutes.route("/").post(createOrder);

