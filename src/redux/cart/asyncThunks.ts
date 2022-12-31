import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cartURL, getPizzaURL } from '../routes';
import type { CartItems, CartItem } from './types';

export const fetchCart = createAsyncThunk<CartItems>(
  'cart/fetchCart/',
  async () => {
    const res = await axios.get(cartURL);
    console.log(`Делаю GET запрос на ${cartURL} `);
    return res.data;
  },
);

export const addToCartMockAPI = createAsyncThunk<void, CartItem>(
  'cart/addToCartMockAPI/',
  async (cartItems) => {
    console.log(`Делаю POST запрос на ${cartURL}
    POST = {
      ${JSON.stringify(cartItems, null, '  ')}
    }
    `);
    await axios.post(cartURL, cartItems);
  },
);

// Увеличить количество пиццы в корзине MockApi
export const updateCartMockAPI = createAsyncThunk<void, CartItem>(
  'product/updateCartMockAPI',
  async (cartItem) => {
    const url = getPizzaURL(cartItem.id);
    
    console.log(`Делаю PUT запрос на ${url}
    PUT = { amount: ${cartItem.amount}}
    `);

    await axios.put(url, { amount: cartItem.amount });
  },
);

export const removeItemMockAPI = createAsyncThunk<void, string>(
  'cart/removeItemMockAPI',
  async (id) => {
    const url = getPizzaURL(id);
    console.log(`Делаю DELETE запрос на ${url}`);
    await axios.delete(url);
  },
);
