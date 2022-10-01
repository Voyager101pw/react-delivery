import React from 'react';
import { useGetCartItemsQuery } from '../../store/apiSlice';

function CartDetails() {
  const { data: cart = [] } = useGetCartItemsQuery();
  const { amountPizzas, amountPrice } = cart.reduce((acc, pizzaObj) => (
    {
      amountPizzas: acc.amountPizzas + pizzaObj.amount,
      amountPrice: acc.amountPrice + pizzaObj.amount * pizzaObj.price,
    }
  ), { amountPizzas: 0, amountPrice: 0 });

  return (
    <>
      <div>
        Всего пиццы:
        <b>{`${amountPizzas} шт`}</b>
      </div>

      <div>
        Сумма заказа:
        <b className="price">{`${amountPrice} ₽`}</b>
      </div>
    </>
  );
}

export default CartDetails;
