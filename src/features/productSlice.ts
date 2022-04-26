import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../types";

const BASE_URL = "https://fakestoreapi.com/products";

const initialState: ProductState = {
  isLoading: false,
  products: [],
  error: "",
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (obj, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL);
      return res.json();
    } catch (err) {
      return "Unable to fetch data right now";
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    }),
      builder.addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      });
    builder.addCase(getProducts.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
