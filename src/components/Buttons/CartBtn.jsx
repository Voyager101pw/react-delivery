import React from 'react';
import CartIcon from '../../assets/img/cart-icon.svg';

function CartBtn({ itmes = [], amount = 500, quantity = 5 }) {
  return (
    <button type="button" className="btn header__btn">
      <div className="btn__price">{`${amount} ₽`}</div>
      <div className="btn__delimiter" />
      <CartIcon className="btn__cart-icon" />
      <div className="btn__price">{quantity}</div>
    </button>
  );
}

export default CartBtn;
