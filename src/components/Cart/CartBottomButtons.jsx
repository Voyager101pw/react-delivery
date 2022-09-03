import React from 'react';
import { GetBack, PayNow } from '../Buttons';

function CartBottomButtons() {
  return (
    <>
      <GetBack className="cart__btn-back" />
      <PayNow className="cart__btn-pay" />
    </>
  );
}

export default CartBottomButtons;
