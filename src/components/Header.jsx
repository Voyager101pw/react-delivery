import React from 'react';
import Logo from './Logo.jsx';
import CartButton from './CartButton.jsx';

function Header() {
  return (
    <div className="header">
      <Logo />
      <CartButton />
    </div>
  );
}

export default Header;
