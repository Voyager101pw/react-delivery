import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface ICartItem {
  id: string;
  name: string;
  type: string;
  size: number;
  imageUrl: string;
  price: number;
  amount: number;
}

const cartAdapter = createEntityAdapter<ICartItem>();
const initialState = cartAdapter.getInitialState({
  totalPrice: 0,
  totalPizzas: 0,
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: cartAdapter.addOne,
    updateCartItem: cartAdapter.updateOne,
    removeCartItem: cartAdapter.removeOne,
    removeAllCartItem: cartAdapter.removeAll,
  },
});

interface CartDetails {
  totalPrice: number;
  totalPizzas: number;
}

export const selectCartDetails = (state: RootState): CartDetails => ({
  totalPrice: state.cart.totalPrice,
  totalPizzas: state.cart.totalPizzas,
});

export const selectAmountCartItems = (state: RootState): number =>
  state.cart.ids.length;

export const { selectAll: selectCartItems, selectById: selectCartItemById } =
  cartAdapter.getSelectors<RootState>((state) => state.cart);

export const {
  updateCartItem,
  removeCartItem,
  addItemToCart,
  removeAllCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
