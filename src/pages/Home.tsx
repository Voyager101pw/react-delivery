import React from 'react';
import PizzaCard from '../components/PizzaCard';
import useFilter from '../hooks/useFilter';
import type { Pizzas } from '../redux/pizzas/types';

const renderCards = (pizzas: Pizzas): JSX.Element[] =>
  pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id} />);

const Home: React.FC = () => {
  const pizzas = useFilter();
  return (
    <div className="content">
      <h1 className="content__title">Все пиццы</h1>
      <div className="content__cards">{renderCards(pizzas)}</div>
    </div>
  );
};

export default Home;
