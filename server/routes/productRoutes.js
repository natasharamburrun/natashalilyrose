/* eslint-disable no-undef */

const express = require("express");
const {returnAllProducts, returnProduct} = require("../controllers/productController.jsx");

const router = express.Router();

router.get("/", returnAllProducts);
router.get("/:id", returnProduct)

module.exports = router