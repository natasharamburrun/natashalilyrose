import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItemById = createAsyncThunk(
  "singleProduct/fetchItemById",
  async (id) => {
    console.log("Product ID from URL:", id);
    const response = await axios.get(
      `http://localhost:8080/api/products/${id}`
    );
    return response.data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    loading: false,
    item: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemById.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default singleProductSlice.reducer;
