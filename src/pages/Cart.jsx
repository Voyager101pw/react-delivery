import React from 'react';
import { useGetCartQuery } from '../store/apiSlice';
import { FullCart, EmptyCart } from '../components/Cart';

function Cart() {
  const { data: cart = [] } = useGetCartQuery();
  const cartIsEmpty = !cart.length;
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
}

export default Cart;
