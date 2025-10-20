import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import singleProductReducer from "./SingleProductSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});

export default store;
