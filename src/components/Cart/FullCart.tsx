import React from 'react';
import { useGetCartItemsQuery } from '../../store/apiSlice';

import CartTop from './HeadeCartr';
import CartItem from './Item';
import Footer from './Footer';

const FullCart: React.FC = () => {
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

      <div className="cart__footer">
        <Footer />
      </div>
    </div>
  );
}

export default FullCart;
