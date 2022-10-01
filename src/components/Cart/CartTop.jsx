import React from 'react';

import { apiSlice } from '../../store/apiSlice';
import CartIcon from '../../assets/img/cart-icon.svg';
import BasketIcon from '../../assets/img/basket-icon.svg';

function CartTitle() {
  const [deleteCartItem] = apiSlice.useDelCartItemMutation();
  const { data: cartItems = [] } = apiSlice.useGetCartItemsQuery();

  const handlerClearCart = () => {
    cartItems.forEach(({ id }) => deleteCartItem(id));
  };

  return (
    <>
      <div className="title cart__title">
        <CartIcon className="cart-icon cart-icon--black title__icon" />
        Корзина
      </div>
      <div className="cart__clear-basket" onClick={handlerClearCart}>
        <BasketIcon className="basket-icon basket-icon--gray" />
        <span>Очистить корзину </span>
      </div>
    </>
  );
}

export default CartTitle;
