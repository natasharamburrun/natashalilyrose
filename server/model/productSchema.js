/* eslint-disable no-undef */

import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: "This field is required",
  },
  productDescription: {
    type: String,
    required: "This field is required",
  },
  size: {
    type: String,
  },
  price: {
    type: String,
    required: "This field is required",
    min: 1,
  },
  image: {
    type: String,
  },
});
const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;
