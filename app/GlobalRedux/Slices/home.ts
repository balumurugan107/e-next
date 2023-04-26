"use client";

import { httpClientInstance, HttpClientResponse } from "@/core/HttpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axois from "axios";

export interface IProduct{
    _id: string,
    name: string,
    price: number,
    description: string
}

export interface CounterState {
  isLoading: boolean;
  productList: IProduct[] | null;
}

const initialState: CounterState = {
  isLoading: false,
  productList: null
};

export const getAllProducts = createAsyncThunk("@home/get-all-products", async () => {
  const response = await httpClientInstance.get<HttpClientResponse<IProduct[]>>("/product/all");
  console.log(response,"responses")
  return await response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productList: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // Add any fetched posts to the array
        state.productList = action.payload.data;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const { productList } = productSlice.actions;

export default productSlice.reducer;
