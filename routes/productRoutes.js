import {getProduct, createProduct, allPro, updateProduct, deleteProduct} from "../controllers/productController.js";
import express from "express";
export const router=express.Router();
router.route("/").get(allPro).post(createProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);