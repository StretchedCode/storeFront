import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import shopReducer from "../features/shopSlice"

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
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
