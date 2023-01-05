import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPizzas, calcTotalPrice } from '../../utils';
import { fetchCart, updateCartMockAPI, addToCartMockAPI, clearCartMockApi, removeItemMockAPI } from './asyncThunks';

import type { CartItem } from './types';

interface State {
  entities: {
    [key: string]: CartItem;
  };
  ids: string[];
  totalPrice: number;
  totalPizzas: number;
}

const initialState: State = {
  entities: {},
  ids: [],
  totalPrice: 0,
  totalPizzas: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, { payload: cartItems }) => {
      state.ids = cartItems.map((pizza) => pizza.extendedId);
      state.entities = cartItems.reduce(
        (acc, pizza) => ({
          ...acc,
          [pizza.extendedId]: pizza,
        }),
        {},
      );
      state.totalPrice = calcTotalPrice(cartItems);
      state.totalPizzas = calcTotalPizzas(cartItems);
    }),

    builder.addCase(addToCartMockAPI.fulfilled, (state, { payload: cartItem }) => {
      state.ids.push(cartItem.extendedId);
      state.entities[cartItem.extendedId] = cartItem;
      state.totalPrice = calcTotalPrice(Object.values(state.entities));
      state.totalPizzas = calcTotalPizzas(Object.values(state.entities));
    }),

    builder.addCase(updateCartMockAPI.fulfilled, (state, { payload: newCartItem }) => {
      const cartItem = state.entities[newCartItem.extendedId];
      if (cartItem.amount < newCartItem.amount) {
        state.totalPizzas += 1;
        state.totalPrice += newCartItem.price;
      } else {
        state.totalPizzas -= 1;
        state.totalPrice -= newCartItem.price;
      }
      cartItem.amount = newCartItem.amount;
    });

    builder.addCase(clearCartMockApi.fulfilled, (state) => {
      state.ids = [];
      state.entities = {};
      state.totalPizzas = 0;
      state.totalPrice = 0;
    });

    builder.addCase(removeItemMockAPI.fulfilled, (state, { payload: removedCartItem }) => {
      for (let i = 0; i < state.ids.length; i++) {
        if (state.ids[i] === removedCartItem.extendedId) {
          state.ids.splice(i, 1);
          break;
        }
      }
      state.totalPrice -= removedCartItem.price * removedCartItem.amount;
      state.totalPizzas -= removedCartItem.amount;
      delete state.entities[removedCartItem.extendedId];
    });
  },
});

export default cartSlice.reducer;
