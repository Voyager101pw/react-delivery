import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import pizzaLogo from '../assets/img/pizza.png';
import CartBtn from './Buttons/CartBtn';

function Header() {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <div className="header__wrapper">
            <img className="header__logo" src={pizzaLogo} alt="pizza_icon" />
            <div className='header__content'>
              <p className='header__title'>REACT PIZZA</p>
              <span className='header__subtitle'>самая вкусная пицца во вселенной</span>
            </div>
          </div>
        </Link>
        <Link to='cart'>
          <CartBtn />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
