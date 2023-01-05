import React from 'react';
import { useAppSelector } from '../../../../redux/store';
import { GetBack, PayNow } from '../../../Buttons';
import { selectCartDetails } from '../../../../redux/cart/selectors';

const Footer: React.FC = () => {
  const { totalPizzas, totalPrice } = useAppSelector(selectCartDetails);

  return (
    <>
      <div className="cart__details">
        <div>
          Всего пиццы:
          <b>{`${totalPizzas} шт`}</b>
        </div>

        <div>
          Сумма заказа:
          <b className="price">{`${totalPrice} ₽`}</b>
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
