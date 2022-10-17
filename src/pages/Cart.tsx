import React from 'react';
import { useGetCartItemsQuery } from '../store/apiSlice';
import { FullCart, EmptyCart } from '../components/Cart';

const Cart: React.FC = () => {
  const { data: cart = [] } = useGetCartItemsQuery();
  const cartIsEmpty = !cart.length;
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
};

export default Cart;
