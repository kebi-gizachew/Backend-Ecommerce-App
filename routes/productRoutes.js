import {getProduct, createProduct, allPro, updateProduct, deleteProduct} from "../controller/productController.js";
import express from "express";
export const productRoutes=express.Router();
productRoutes.route("/").get(allPro).post(createProduct);
productRoutes.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);