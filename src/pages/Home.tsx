import React from 'react';
import PizzaCard from '../components/PizzaCard';
import Spinner from '../components/Spinner';
import { useFetchPizza } from '../hooks';
import { Pizza } from '../store/types';

const renderCards = (pizza: Pizza[]): JSX.Element[] =>
  pizza.map((pizzaProp) => <PizzaCard pizza={pizzaProp} key={pizzaProp.id} />);

const Home: React.FC = () => {
  const { pizza, pizzaIsLoading } = useFetchPizza();
  const content = pizzaIsLoading ? <Spinner /> : renderCards(pizza);
  return (
    <div className="content">
      <h1 className="content__title">Все пиццы</h1>
      <div className="content__cards">{content}</div>
    </div>
  );
};

export default Home;
