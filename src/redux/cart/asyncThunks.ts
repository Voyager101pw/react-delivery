import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlToCart, getUrlToCartItem } from '../routes';
import type { CartItems, CartItem } from './types';

export const fetchCart = createAsyncThunk<CartItems>(
  'cart/fetchCart/',
  async () => {
    const res = await axios.get(urlToCart);
    return res.data;
  },
);

// Добавить товар в корзину. MockAPI endpoint: cart
export const addToCartMockAPI = createAsyncThunk<CartItem, CartItem>(
  'cart/addToCartMockAPI/',
  async (cartItem) => {
    const { data } = await axios.post<CartItem>(urlToCart, cartItem);
    return data;
  },
);

// Увеличить количество пиццы в корзине. MockApi endpoint cart
export const updateCartMockAPI = createAsyncThunk<CartItem, CartItem>(
  'cart/updateCartMockAPI',
  async (updatedCartItem) => {
    const url = getUrlToCartItem(updatedCartItem.id);
    const res = await axios.put(url, updatedCartItem);
    return res.data;
  },
);

export const removeItemMockAPI = createAsyncThunk<CartItem, CartItem['id']>(
  'cart/removeItemMockAPI',
  async (id) => {
    const url = getUrlToCartItem(id);
    const { data: removedCartItem } = await axios.delete(url);
    return removedCartItem;
  },
);

export const clearCartMockApi = createAsyncThunk<void, number[]>(
  'cart/clearCartMockApi',
  async (ids) => {
    ids.forEach((id) => {
      axios.delete(getUrlToCartItem(id));
    });
  },
);
