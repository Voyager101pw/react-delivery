import React from 'react';
import { useGetCartQuery } from '../../store/apiSlice';

function CartDetails() {
  const { data: cart = {} } = useGetCartQuery();
  const { totalDue = 0, amountPizzas = 0 } = cart;

  return (
    <>
      <div>
        Всего пиццы:
        <b>{`${amountPizzas} шт`}</b>
      </div>

      <div>
        Сумма заказа:
        <b className="price">{`${totalDue} ₽`}</b>
      </div>
    </>
  );
}

export default CartDetails;
