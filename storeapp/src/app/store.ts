import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shopReducer from "../features/shopSlice"

export const store = configureStore({
  reducer: {
    shop: shopReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
