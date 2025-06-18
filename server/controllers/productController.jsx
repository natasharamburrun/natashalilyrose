/* eslint-disable no-undef */

const ProductModel = require("../model/productSchema.jsx");

//return all data
const returnAllProducts = async (req, res) => {
  try {
    const productData = await ProductModel.find();
    res.json(productData);
  } catch (error) {
    console.log("error is", error);
  }
};

module.exports = returnAllProducts;
