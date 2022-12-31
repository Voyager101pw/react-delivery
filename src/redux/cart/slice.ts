import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { CartDetails, CartItem } from './types';
import { fetchCart } from './asyncThunks';
import { RootState } from '../store';

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

export const { selectAll: selectCartItems, selectById: selectCartItemById } =
  cartAdapter.getSelectors<RootState>((state) => state.cart);

export const selectCartDetails = ({ cart }: RootState): CartDetails =>
  cartAdapter
    .getSelectors()
    .selectAll(cart)
    .reduce(
      (acc, entity) => ({
        totalPizzas: acc.totalPizzas + entity.amount * entity.price,
        totalPrice: acc.totalPrice + entity.price,
      }),
      {
        totalPrice: 0,
        totalPizzas: 0,
      },
    );

export const {
  updateCartItem,
  removeCartItem,
  addItemToCart,
  removeAllCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
