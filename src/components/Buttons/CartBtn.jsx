import React from 'react';
import CartIcon from '../../assets/img/cart-icon.svg';
import { useGetCartInfoQuery } from '../../store/apiSlice';

function CartBtn() {
  const { data: { totalDue = 0, amountPizzas = 0 } = {} } = useGetCartInfoQuery();
  return (
    <button type="button" className="btn header__btn">
      <div className="btn__price">{`${totalDue} ₽`}</div>
      <div className="btn__delimiter" />
      <CartIcon className="btn__cart-icon" />
      <div className="btn__price">{amountPizzas}</div>
    </button>
  );
}

export default CartBtn;
