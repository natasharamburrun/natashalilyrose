import express from "express"
import { returnAllProducts, returnProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", returnAllProducts);
router.get("/:id", returnProduct)

export default router;