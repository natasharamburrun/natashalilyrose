import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchItemById = createAsyncThunk(
  "singleProduct/fetchItemById",
  async (id, thunkAPI) => {
    const response = await axios.get(`${API_URL}/api/products/${id}`, {
      signal: thunkAPI.signal,
          });
    return response.data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    loading: false,
    item: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemById.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.item = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loading = false;
        if (action.error?.name === "AbortError") {
          // request was aborted — treat as idle or keep previous item
          state.status = "idle";
        } else {
          state.status = "failed";
          state.error = action.error?.message || "Failed to load product";
        }
      });
  },
});

export default singleProductSlice.reducer;
