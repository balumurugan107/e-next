"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axois from "axios";
import { ILogin } from "@/app/login/page";
import { store } from "../store";
import { createCookie, tokenKey } from "@/_constants";

export interface LoginState {
  isLoading: boolean;
  token: string;
}

const initialState: LoginState = {
  isLoading: false,
  token: "",
};

export const getToken = createAsyncThunk("@login/get-token", async (data : ILogin) => {
  const response = await axois.post("http://localhost:5000/users/login", data);
  if(response?.data?.token) createCookie(tokenKey,response?.data?.token)
  return await response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userlogin: (state) => {
      state.isLoading = true;
    },
    updateTokenToStore: (state,action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.token;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const { userlogin,updateTokenToStore } = userSlice.actions;

export default userSlice.reducer;

export const token = (state: { user: { token: any; }; }) => state.user.token