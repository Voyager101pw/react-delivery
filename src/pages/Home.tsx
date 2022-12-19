import React from 'react';
import PizzaCard from '../components/PizzaCard';
import useFetchPizzas from '../hooks/useFetchPizzas';
import type { IPizza } from '../store/slices/pizzas';

const renderCards = (pizzas: IPizza[]): JSX.Element[] =>
  pizzas.map((pizza) => <PizzaCard pizza={pizza} key={pizza.id} />);

const Home: React.FC = () => {
  const pizzas = useFetchPizzas();
  return (
    <div className="content">
      <h1 className="content__title">Все пиццы</h1>
      <div className="content__cards">{renderCards(pizzas)}</div>
    </div>
  );
};

export default Home;
