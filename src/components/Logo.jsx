import React from 'react';
import pizzaLogo from '../assets/img/pizza.png';

function Logo() {
  return (
    <div className="header__logo">
      <img src={pizzaLogo} alt="sign_logo" className='logo-icon'/>
      <div className="content">
        <p>REACT PIZZA</p>
        <span className='lead'>самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
}
export default Logo;
