import React from 'react';

import CartIcon from 'img/cart-icon.svg';
import BasketIcon from 'img/basket-icon.svg';
import { useAppDispatch } from '../../../store/hooks';
import { removeAllCartItem } from '../../../store/slices/cart';

const HeaderCart: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="title cart__title">
        <CartIcon className="cart-icon cart-icon--black title__icon" />
        Корзина
      </div>
      <div
        className="cart__clear-basket"
        onClick={() => dispatch(removeAllCartItem())}
      >
        <BasketIcon className="basket-icon basket-icon--gray" />
        <span>Очистить корзину </span>
      </div>
    </>
  );
};

export default HeaderCart;
