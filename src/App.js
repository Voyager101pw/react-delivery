import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';
import { apiSlice } from './store/apiSlice';

function App() {
apiSlice.useGetCartInfoQuery();
apiSlice.useGetPizzasQuery();
  return (
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
}

export default App;
