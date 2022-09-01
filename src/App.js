import React from 'react';

import { Header } from './components';
import EmptyCart from './components/Cart/EmpyCart';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Home /> */}
      {/* <Cart /> */}
      <EmptyCart />
    </div>
  );
}

export default App;
