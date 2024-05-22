// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { useEffect } from 'react';
interface Product {
  id: number;
  nama: string;
  gambar: string;
  harga: number;
  qty: number;
  totalProduk: number;
  deskripsi: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const findItems = state.items.find(item => item.id === action.payload.id);
      if(findItems) {
        findItems.qty += action.payload.qty;
        findItems.totalProduk += action.payload.harga; 
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeAllProduct: (state) => {
      state.items = [];
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    initializeCart: (state) => {
      if (typeof window !== 'undefined') {
        // Inisialisasi keranjang belanja dari localStorage saat aplikasi dimuat
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
          state.items = JSON.parse(storedItems);
        }
      }

    },
    incrementProduk: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.qty += 1;
        item.totalProduk = item.totalProduk + item.harga
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decrementProduk: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
        item.totalProduk = item.totalProduk - item.harga
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    addToCartFromDetailProduk: (state, action: PayloadAction<Product>) => {
      const findItems = state.items.find(item => item.id === action.payload.id);
      if(findItems) { 
        findItems.qty += action.payload.qty;
        findItems.qty = 
        findItems.totalProduk += action.payload.harga; 
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, initializeCart, incrementProduk, decrementProduk, removeAllProduct } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;

