import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import pizzaLogo from 'img/pizza.png';
import { GoToCart } from './Buttons';

const Header: React.FC = () => (
  <>
    <div className="header">
      <Link to="/">
        <div className="header__wrapper">
          <img className="header__logo" src={pizzaLogo} alt="pizza_icon" />
          <div className="header__content">
            <p className="header__title">PIZZA SHOP</p>
            <div className="header__subtitle">самая вкусная пицца во вселенной</div>
          </div>
        </div>
      </Link>
      <Link to="cart">
        <GoToCart />
      </Link>
    </div>
    <Outlet />
  </>
);

export default Header;
