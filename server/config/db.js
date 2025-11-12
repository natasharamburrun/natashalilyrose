import mongoose from 'mongoose'

import productJson from "../data/productData.json" with { type: "json" };
import ProductModel from "../model/productSchema.js";

export const connectDB = async () => {
  try {
    const dbURI = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${dbURI.connection.host}`);

    const productCount = await ProductModel.countDocuments();

    if (productCount === 0) {
      await ProductModel.create(productJson);
      console.log("Product Inserted successfully");
    } else {  
      console.log("Product already exist, skipping insertion");
    }
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};
