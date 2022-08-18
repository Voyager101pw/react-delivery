import React from 'react';
import { Header, Catigories, SortPopup } from './components';

function App() {
  return (
    <div className='App'>
        <Header />
        <div className="filters">
          <Catigories />
          <SortPopup />
        </div>
          <div className="content">
            <h1 className="content__title">Все пиццы</h1>
            <div className="content__items">
            </div>
          </div>
    </div>
  );
}

export default App;
