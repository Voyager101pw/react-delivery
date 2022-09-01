import React from 'react';
import CartIcon from '../../assets/img/cart-icon.svg';

function CartBtn({ itmes = [], amount = 500, quantity = 5 }) {
  return (
    <button type='button' className='btn header__btn'>
      <span className='btn__price'>{`${amount} ₽`}</span>
      <div className='btn__delimiter' />
      <CartIcon className='btn__cart-icon' />
      <span className='btn__price'>{quantity}</span>
    </button>
  );
}

export default CartBtn;
