import React from 'react';
import { GetBack } from '../Buttons';
import EmptyCartIcon from '../../assets/img/empty-cart-icon.svg';

const EmptyCart: React.FC = () => {
  return (
    <div className="empty-cart">
      <div className="title empty-cart__title">Корзина пуста 😕</div>
      <div className="title__sub empty-cart__subtitle">Вероятно всего, вы не заказывали еще пиццу.</div>
      <div className="title__sub empty-cart__subtitle">Для того, чтобы заказать пиццу, перейдите на главную страницу.</div>
      <EmptyCartIcon className="empty-cart__icon" />
      <GetBack />
    </div>
  );
}

export default EmptyCart;
