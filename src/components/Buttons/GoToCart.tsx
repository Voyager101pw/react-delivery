import React from 'react';
import CartIcon from '../../assets/img/cart-icon.svg';
import { useGetCartItemsQuery } from '../../store/apiSlice';

const CartBtn: React.FC = () => {
  const { data: cart = [] } = useGetCartItemsQuery();
  const { amountPizzas, amountPrice } = cart.reduce((acc, pizzaObj) => (
    {
      amountPizzas: acc.amountPizzas + pizzaObj.amount,
      amountPrice: acc.amountPrice + pizzaObj.amount * pizzaObj.price,
    }
  ), { amountPizzas: 0, amountPrice: 0 });

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
