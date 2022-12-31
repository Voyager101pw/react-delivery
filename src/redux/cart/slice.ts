import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { CartItem } from './types';
import { fetchCart } from './asyncThunks';

const cartAdapter = createEntityAdapter<CartItem>();

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState(),
  reducers: {
    addItemToCart: cartAdapter.addOne,
    updateCartItem: cartAdapter.updateOne,
    removeCartItem: cartAdapter.removeOne,
    removeAllCartItem: cartAdapter.removeAll,
  },
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      cartAdapter.setMany(state, action.payload);
    });
  },
});

export const {
  updateCartItem,
  removeCartItem,
  addItemToCart,
  removeAllCartItem,
} = cartSlice.actions;

export { cartAdapter };
export default cartSlice.reducer;
