import React, { useEffect } from 'react';
import { PizzaCard, Filters } from '../components';
import { useGetPizzasQuery } from '../store/apiSlice';
import Spinner from '../components/Spinner';

function Home() {
  const { data: pizzas = [] } = useGetPizzasQuery();

  const renderCards = pizzas.map(({
    id, imageUrl, price, name, sizes, types,
  }) => (
    <PizzaCard
      key={id}
      id={id}
      imageUrl={imageUrl}
      name={name}
      price={price}
      sizes={sizes}
      types={types}
    />
  ));
  console.log(pizzas);
  return (
    <>
      <div className="filters">
        <Filters />
      </div>
      <div className="content">
        <h1 className="content__title">Все пиццы</h1>
        {/* <Spinner /> */}
        <div className="content__cards">
          {renderCards}
        </div>
      </div>
    </>
  );
}

export default Home;
