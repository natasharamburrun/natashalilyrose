import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import singleProductReducer from "./SingleProductSlice";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice"
import filtersReducer from "./filterSlice";


const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    modal: modalReducer,
    filters: filtersReducer,
  },
});

export default store;
