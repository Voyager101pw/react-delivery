import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cartURL } from '../routes';
import type { CartItems  } from './types';


export const fetchCart = createAsyncThunk<CartItems>(
  'cart/fetchCart/',
  async () => {
    console.log('load cart data');
    const res = await axios.get(cartURL);
    return res.data;
  },
);

export const addToCart = createAsyncThunk<CartItems>(
  'cart/addCart/',
  async (product) => {
    const res = await axios.post(cartURL, product);
    return res.data;
  },
);
