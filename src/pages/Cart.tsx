import React from 'react';
import { FullCart, EmptyCart } from '../components/Cart';
import { useAppSelector } from '../redux/store';
import { selectCartItems } from '../redux/cart/slice';

const Cart: React.FC = () => {
  const cartIsEmpty = !useAppSelector(selectCartItems).length;
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
};

export default Cart;
