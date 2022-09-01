import React from 'react';
import EmptyCartIcon from '../../assets/img/empty-cart-icon.svg';

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="title empty-cart__title">Корзина пуста 😕</div>
      <span className="title__sub empty-cart__subtitle">Вероятно всего, вы не заказывали еще пиццу.</span>
      <span className="title__sub empty-cart__subtitle">Для того, чтобы заказать пиццу, перейдите на главную страницу.</span>
      <EmptyCartIcon className='empty-cart__icon' />
      <button className="btn btn--outline btn--gray empty-cart__btn-back">Вернуться назад</button>
    </div>
  );
}

export default EmptyCart;
