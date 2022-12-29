import React from 'react';
import CartIcon from 'img/cart-icon.svg';
import { useAppSelector } from '../../store/hooks';
import { selectCartItems } from '../../store/slices/cart';

const CartBtn: React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const amountPizzas = cartItems.reduce((acc, cartItem) => acc + cartItem.amount, 0);
  const amountPrice = cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.amount, 0);

  return (
    <button type="button" className="btn header__btn">
      <div className="btn__price">{`${amountPrice} ₽`}</div>
      <div className="btn__delimiter" />
      <CartIcon className="btn__cart-icon" />
      <div className="btn__price">{amountPizzas}</div>
    </button>
  );
};

export default CartBtn;
