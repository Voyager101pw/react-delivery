import React from 'react';
import { useGetCartItemsQuery } from '../../store/apiSlice';

import CartTop from './CartTop';
import CartItem from './CartItem';
import CartDetails from './CartDetails';
import CartBottomButtons from './CartBottomButtons';

function FullCart() {
  const { data: cart = [], isSuccess } = useGetCartItemsQuery();
  const renderCartItems = isSuccess
    ? cart.map((pizzaProps) => <CartItem key={pizzaProps.id} pizza={pizzaProps} />)
    : [];

  return (
    <div className="cart">

      <div className="cart__top">
        <CartTop />
      </div>

      <div className="cart__items">
        {renderCartItems}
      </div>

      <div className="cart__details">
        <CartDetails />
      </div>

      <div className="cart__bottom-buttons">
        <CartBottomButtons />
      </div>

    </div>
  );
}

export default FullCart;
