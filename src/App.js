import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Home /> */}
      <Cart />
    </div>
  );
}

export default App;
