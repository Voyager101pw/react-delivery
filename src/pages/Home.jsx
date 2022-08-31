import React from 'react';
import { PizzaCard } from '../components';

function Home() {

  return (
    <>
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
    </>
  );
}

export default Home;
