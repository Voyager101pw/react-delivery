import { createSelector } from '@reduxjs/toolkit';
import { cartAdapter } from './slice';
import type { RootState } from '../store';
import { CartItem } from './types';

export const selectAmountCartItems = (state: RootState): number =>
  state.cart.ids.length;

export const { selectAll: selectCartItems, selectById: selectCartItemById } =
  cartAdapter.getSelectors<RootState>((state) => state.cart);

export const selectCartDetails = createSelector(
  [
    (state: RootState) => state.cart.ids,
    (state: RootState) => state.cart.entities,
  ],
  (ids, entities) => {
    const totalPrice = ids.reduce((acc: number, id) => {
      const { price, amount } = entities[id] as CartItem;
      return acc + price * amount;
    }, 0);
    const totalPizzas = ids.reduce((acc: number, id) => {
      const { amount } = entities[id] as CartItem;
      return acc + amount;
    }, 0);
    return { totalPrice, totalPizzas };
  },
);
