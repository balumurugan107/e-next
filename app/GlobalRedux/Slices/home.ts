"use client";

import { httpClientInstance, HttpClientResponse } from "@/core/HttpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axois from "axios";
import { AppThunk } from "../store";

export interface IProduct{
    _id: string,
    name: string,
    price: number,
    description: string
}

export interface ProductState {
  isLoading: boolean;
  productList: IProduct[] | null;
}

const initialState: ProductState = {
  isLoading: false,
  productList: null
};

export const getAllProducts = () => async (dispatch : any) => {
  try {
    const response = await httpClientInstance.get("/product/all");

    dispatch(productSlice.actions.getAllProducts(response.data));
  } catch (ex) {
    console.error(ex);
  }
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state,action) => {
      state.productList = action.payload.data
    },
  }
});


export default productSlice.reducer;
