import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Cart } from './pages';
import Header from './components/Header';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
