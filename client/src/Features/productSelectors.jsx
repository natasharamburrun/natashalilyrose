import { createSelector } from "@reduxjs/toolkit";

export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectFilters = (state) => state.filters;

export const selectFilteredProducts = createSelector(
  [selectAllProducts, selectFilters],
  (items, filters) => {
    const query = (filters.searchTerm || "").trim().toLowerCase();
    const category = (filters.category || "all").toLowerCase();

    return items.filter((p) => {
      const name = (p.productName || "").toString().toLowerCase();
      const desc = (p.productDescription || "").toString().toLowerCase();

      const productCategory = (p.category || "").toString().toLowerCase();


      const matchesQuery =
        query === "" || desc.includes(query) || name.includes(query);
      const matchesCategory =
        category === "all" || productCategory === category;

      return matchesQuery && matchesCategory;
    });
  }
);
