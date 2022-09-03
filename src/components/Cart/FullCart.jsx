import React from 'react';

import CartTop from './CartTop';
import CartItem from './CartItem';
import CartDetails from './CartDetails';
import CartBottomButtons from './CartBottomButtons';

function FullCart() {
  return (
    <div className="cart">

      <div className="cart__top">
        <CartTop />
      </div>

      <div className="cart__items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="cart__details">
        <CartDetails />
      </div>

      <div className="cart__bottom-buttons">
        <CartBottomButtons />
      </div>

    </div>
  );
}

export default FullCart;
