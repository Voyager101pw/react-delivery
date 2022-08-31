import React from 'react';

import { Header, Filters, CartTop, CartItem, CartDetails, CartBottomButtons } from '../components';

function Cart() {
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

  )
}

export default Cart;
