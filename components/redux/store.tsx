// store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { initializeCart } from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

if (typeof window !== 'undefined') {
  store.dispatch(initializeCart());
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
