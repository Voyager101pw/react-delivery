import React from 'react';

import { FullCart, EmptyCart } from '../components/Cart';

function Cart() {
  const cartIsEmpty = true;
  return cartIsEmpty ? <EmptyCart /> : <FullCart />;
}

export default Cart;
