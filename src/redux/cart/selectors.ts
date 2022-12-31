import type { RootState } from '../store';

export const selectAmountCartItems = (state: RootState): number =>
  state.cart.ids.length;
