"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axois from "axios";
import { ILogin } from "@/app/login/page";
import { store } from "../store";

export interface CounterState {
  isLoading: boolean;
  token: string;
}

const initialState: CounterState = {
  isLoading: false,
  token: "",
};

export const getToken = createAsyncThunk("@login/get-token", async (data : ILogin) => {
  const response = await axois.post("http://localhost:5000/users/login", data);
  return await response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userlogin: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        // Add any fetched posts to the array
        state.token = action.payload.data.token;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const { userlogin } = userSlice.actions;

export default userSlice.reducer;

export const token = (state: { user: { token: any; }; }) => state.user.token