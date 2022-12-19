import React from 'react';
import { FullCart, EmptyCart } from '../components/Cart';
import { useAppSelector } from '../store/hooks';
import { selectCartItems } from '../store/slices/cart';

const Cart: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartIsEmpty = !cartItems.length;
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
};

export default Cart;
