import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectCartItems } from '../../../store/slices/cart';
import { GetBack, PayNow } from '../../Buttons';

const Footer:React.FC = () => {
  const cartItems = useAppSelector(selectCartItems);
  const { amountPizzas, amountPrice } = cartItems.reduce((acc, pizzaObj) => (
    {
      amountPizzas: acc.amountPizzas + pizzaObj.amount,
      amountPrice: acc.amountPrice + pizzaObj.amount * pizzaObj.price,
    }
  ), { amountPizzas: 0, amountPrice: 0 });

  return (
    <>
      <div className="cart__details">
        <div>
          Всего пиццы:
          <b>{`${amountPizzas} шт`}</b>
        </div>

        <div>
          Сумма заказа:
          <b className="price">{`${amountPrice} ₽`}</b>
        </div>
      </div>

      <div className="cart__bottom-buttons">
        <GetBack />
        <PayNow />
      </div>
    </>
  );
};

export default Footer;
