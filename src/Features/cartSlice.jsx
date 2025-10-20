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
    updateTempItemQuantity(state, action) {
      const tempItem = state.tempItems.find(
        (item) => item._id === action.payload._id
      );
      if (tempItem) {
        tempItem.quantity = action.payload.quantity;
      }
    },
    applyTempUpdates(state, action) {
      const tempItems = state.tempItems.find(
        (item) => item._id === action.payload._id
      );
      const cartItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem && tempItems) {
        cartItem.quantity = tempItems.quantity;
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateTempItemQuantity,
  applyTempUpdates,
} = cartSlice.actions;

export default cartSlice.reducer;
