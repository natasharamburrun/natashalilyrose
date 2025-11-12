/* eslint-disable no-undef */

import ProductModel from "../model/productSchema.js";

//return all data
export const returnAllProducts = async (req, res) => {
  try {
    const productData = await ProductModel.find();
    res.json(productData);
  } catch (error) {
    console.log("error is", error);
  }
};

//return data for product
export const returnProduct = async (req, res) => {
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
