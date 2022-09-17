/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PizzaCard, Filters } from '../components';
import { useGetPizzasQuery } from '../store/apiSlice';
import Spinner from '../components/Spinner';

function Home() {
  const { data: pizzas = [], isLoading: pizzasIsLoading } = useGetPizzasQuery();

  const renderCards = () => pizzas.map((props) => (
    <PizzaCard {...props} key={props.id} />
  ));

  const content = pizzasIsLoading ? <Spinner /> : renderCards();

  return (
    <>
      <div className="filters">
        <Filters />
      </div>
      <div className="content">
        <h1 className="content__title">Все пиццы</h1>
        <div className="content__cards">{content}</div>
      </div>
    </>
  );
}

export default Home;
