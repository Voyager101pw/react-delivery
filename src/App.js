import React from 'react';
import { Header, Filters } from './components';
import PizzaCard from './components/PizzaCard';


function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>

      <div className='filters'>
        <Filters />
      </div>

      <div className='content'>
        <h1 className='content__title'>Все пиццы</h1>
        <div className='content__items'>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
        </div>
      </div>
    </div>
  );
}

export default App;
