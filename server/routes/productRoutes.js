/* eslint-disable no-undef */

const express = require("express");
const returnAllProducts = require("../controllers/productController.jsx");

const router = express.Router();

router.get("/", returnAllProducts);

module.exports = router