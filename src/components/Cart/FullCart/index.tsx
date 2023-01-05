import React from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectCartItems  } from '../../../redux/cart/selectors';

import CartTop from './Header';
import CartItem from './CartIem';
import Footer from './Footer';

const FullCart: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems).map((cartItem) => (
    <CartItem key={cartItem.extendedId} extendedId={cartItem.extendedId} />
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
