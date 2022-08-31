import React from 'react';
import pizzaLogo from '../assets/img/pizza.png';
import CartButton from './CartButton';

function Header() {
  return (
    <div className='header'>
      <div className="header__wrapper">
        <img className="header__logo" src={pizzaLogo} alt="pizza_icon"/>
        <div className='header__content'>
          <p className='header__title'>REACT PIZZA</p>
          <span className='header__subtitle'>самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <CartButton />
    </div>

  );
}

export default Header;
