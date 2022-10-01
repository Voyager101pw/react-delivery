import React from 'react';

import CartIcon from '../../assets/img/cart-icon.svg';
import BasketIcon from '../../assets/img/basket-icon.svg';

function CartTitle() {
  return (
    <>
      <div className="title cart__title">
        <CartIcon className="cart-icon cart-icon--black title__icon" />
        Корзина
      </div>
      <div className="cart__clear-basket">
        <BasketIcon className="basket-icon basket-icon--gray" />
        <span>Очистить корзину </span>
      </div>
    </>
  );
}

export default CartTitle;
