import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchItemById = createAsyncThunk(
  "singleProduct/fetchItemById",
  async (id) => {
    const response = await axios.get(`${API_URL}/api/products/${id}`);
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
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.item = action.payload;
      state.loading = false;
    });
  },
});

export default singleProductSlice.reducer;
