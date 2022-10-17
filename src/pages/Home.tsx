import React from 'react';
import PizzaCard from '../components/PizzaCard';
import Filters from '../components/Filters';
import Spinner from '../components/Spinner';
import { useFetchPizza } from '../hooks';

const Home: React.FC = () => {
  const { pizza, pizzaIsLoading } = useFetchPizza();
  const renderCards = (): JSX.Element[] => pizza.map((pizzaProp) => (
    <PizzaCard pizza={pizzaProp} key={pizzaProp.id} />
  ));
  const content = pizzaIsLoading ? <Spinner /> : renderCards();
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
};

export default Home;
