import React from 'react';
import {
  CartTop, CartItem, CartDetails, CartBottomButtons,
} from './index';

function FullCart() {
  return (
    <div className='cart'>

      <div className='cart__top'>
        <CartTop />
      </div>

      <div className='cart__items'>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className='cart__details'>
        <CartDetails />
      </div>

      <div className='cart__bottom-buttons'>
        <CartBottomButtons />
      </div>

    </div>
  );
}

export default FullCart;
