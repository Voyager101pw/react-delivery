import React from 'react';
import iconPath from '../assets/img/cart.svg';

function CartButton({ itmes = [], amount = 500, quantity = 5 }) {
  // const itemsLength = items.length;
  return (
  <div className="header__cart">
    <button type='button' className='button button--cart'>
    <span>{amount} ₽</span>
    <div className='button__delimiter' />
    <img src={iconPath} />
    <span>{quantity}</span>
  </button>
  </div>
  );
}

export default CartButton;
