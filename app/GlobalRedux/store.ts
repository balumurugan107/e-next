"use client"
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userSlice, { LoginState } from './Slices/login';
import productSlice, { ProductState } from './Slices/home';
import { ENABLE_REDUX_DEV_TOOLS } from '@/_constants';
import { createWrapper } from 'next-redux-wrapper';

export interface AppState {
  user: LoginState,
  product: ProductState
}

const rootReducer = combineReducers<AppState>({
  user: userSlice,
  product: productSlice
});

export const store = configureStore({
  reducer: {
      user: userSlice,
      product: productSlice
  },
  devTools: ENABLE_REDUX_DEV_TOOLS
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch