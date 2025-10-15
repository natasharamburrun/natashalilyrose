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

//return data for product
const returnProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const selectOneProduct = await ProductModel.findOne({ _id: id });
    if (selectOneProduct) {
      res.json(selectOneProduct);
    } else {
      res.status(404).json({ message: "product doesn't exist" });
    }
  } catch (error) {
    console.log("error is", error.message);
  }
};
module.exports = { returnAllProducts, returnProduct };
