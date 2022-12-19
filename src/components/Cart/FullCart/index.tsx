import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectCartItems  } from '../../../store/slices/cart';

import CartTop from './HeadeCart';
import CartItem from './CartItem';
import Footer from './Footer';

const FullCart: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems).map((cartItem) => (
    <CartItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className="cart">
      <div className="cart__top">
        <CartTop />
      </div>

      <div className="cart__items">{cartItems}</div>

      <div className="cart__footer">
        <Footer />
      </div>
    </div>
  );
};

export default FullCart;
