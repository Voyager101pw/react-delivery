import React from 'react';
import CartIcon from 'img/cart-icon.svg';
import { useAppSelector } from '../../redux/store';
import { selectCartDetails } from '../../redux/cart/selectors';

const CartBtn: React.FC = () => {
  const { totalPizzas, totalPrice } = useAppSelector(selectCartDetails);
  return (
    <button type="button" className="btn header__btn">
      <div className="btn__price">{`${totalPrice} ₽`}</div>
      <div className="btn__delimiter" />
      <CartIcon className="btn__cart-icon" />
      <div className="btn__price">{totalPizzas}</div>
    </button>
  );
};

export default CartBtn;
