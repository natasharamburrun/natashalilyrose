import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import singleProductReducer from "./SingleProductSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
