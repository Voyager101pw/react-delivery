import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Cart } from './pages';
import Header from './components/Header';
import Filters from './components/Filters';
import { useAppDispatch } from './store/hooks';
import { fetchPizzas } from './store/slices/pizzas';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchPizzas());
    
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Filters />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
