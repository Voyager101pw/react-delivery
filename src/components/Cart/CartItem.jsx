import React from 'react';
import pizzaIcon from '../../assets/img/pizzaCardTEST.png';

function CartItem() {
  return (
    <div className='item cart__item'>

      <img className='item__icon' src={pizzaIcon} alt='Pizza test icon' />
      
      <div className='item__name-info'>
        <h3 className='item__name'>Сырный цыпленок</h3>
        <span className='item__info'>тонкое тесто, 26 см</span>
      </div>

      <div className='item__count'>
        <div className='btn btn--outline btn--circle btn--negative'></div>
        <b>10</b>
        <div className='btn btn--outline btn--circle btn--positive'></div>
      </div>

      <div className='item__price'>
        <b>2450 ₽</b>
      </div>

      <div className="item__remove">
        <div className='btn btn--remove btn--outline btn--circle btn--gray' />
      </div>
    </div>
  );
}

export default CartItem;
