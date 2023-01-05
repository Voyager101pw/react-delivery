import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { CartItem, CartItems } from './types';

export const selectCartItemIds = (state: RootState): number[] =>
  state.cart.ids.map(
    (extendedId) => state.cart.entities[extendedId].id as number,
  );

export const selectCartItems = (state: RootState): CartItems => {
  return state.cart.ids.map((id) => state.cart.entities[id]);
};

export const selectCartItemById = createSelector(
  (state: RootState, extendedId: CartItem['extendedId']) =>
    state.cart.entities[extendedId],
  (cartItem) => cartItem,
);

export const selectCartDetails = createSelector(
  [
    (state: RootState) => state.cart.totalPrice,
    (state: RootState) => state.cart.totalPizzas,
  ],
  (totalPrice, totalPizzas) => ({ totalPrice, totalPizzas }),
);
