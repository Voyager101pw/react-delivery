import React from 'react';
import { FullCart, EmptyCart } from '../components/Cart';
import { useAppSelector } from '../redux/store';

const Cart: React.FC = () => {
  const cartIsEmpty = !useAppSelector((state) => state.cart.ids.length);
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
};

export default Cart;
