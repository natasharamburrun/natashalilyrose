/* eslint-disable no-undef */
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes")

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", productRoutes)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  })
});
