import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //final cart items
    tempItems: [],
    totalPrice: 0,
    totalQuantity: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => {
        return item._id === action.payload._id;
      });
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...(action && action.payload), quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );
      state.totalQuantity = state.items.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
