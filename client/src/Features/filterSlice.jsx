import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  searchTerm: "",
  category: "all", 
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload ?? "";
    },
    setCategory(state, action) {
      state.category = action.payload ?? "all";
    },
  },
});

export const { setSearchTerm, setCategory } =
  filtersSlice.actions;

export const selectFilters = (state) => state.filters;
export const selectSearchTerm = (state) => state.filters.searchTerm;
export const selectCategoryFilter = (state) => state.filters.category;

export default filtersSlice.reducer;