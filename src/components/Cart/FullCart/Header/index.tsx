import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { removeItemMockAPI } from '../../../../redux/cart/asyncThunks';
import { selectCartItemIds } from '../../../../redux/cart/selectors';
import CartIcon from 'img/cart-icon.svg';
import BasketIcon from 'img/basket-icon.svg';

const HeaderCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const ids = useAppSelector(selectCartItemIds);

  const handleClick = (): void => {
    if (window.confirm('Очистить корзину?')) {
      ids.forEach((id) => {
        dispatch(removeItemMockAPI(id));
      });
    }
  };

  return (
    <>
      <div className="title cart__title">
        <CartIcon className="cart-icon cart-icon--black title__icon" />
        Корзина
      </div>
      <div className="cart__clear-basket" onClick={handleClick}>
        <BasketIcon className="basket-icon basket-icon--gray" />
        <span>Очистить корзину </span>
      </div>
    </>
  );
};

export default HeaderCart;
