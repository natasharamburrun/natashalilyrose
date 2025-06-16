/* eslint-disable no-undef */
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;
connectDB();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
