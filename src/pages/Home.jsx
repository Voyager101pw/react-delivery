/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PizzaCard, Filters } from '../components';
import {
  useGetPizzasQuery, useGetAllowedValuesQuery,
  useGetCartStateQuery, useAddToCartMutation,
} from '../store/apiSlice';
import Spinner from '../components/Spinner';

function Home() {
  const { data: pizzas, isLoading: pizzasIsLoading } = useGetPizzasQuery();
  const { data: allowedValuesCard, isLoading: valuesIsLoading } = useGetAllowedValuesQuery('card');
  const { data: cartState = {}, isLoading: cartStateIsLoading } = useGetCartStateQuery();
  const [addToCart] = useAddToCartMutation();

  const renderCards = () => pizzas.map((props) => (
    <PizzaCard
      key={props.id}
      {...props} // { id, imageUrl, price, name, sizes, types }
      allowedValues={allowedValuesCard}
      addToCart={addToCart}
      cartState={cartState}
    />
  ));

  const content = pizzasIsLoading || valuesIsLoading || cartStateIsLoading
    ? <Spinner />
    : <div className="content__cards">{renderCards()}</div>;

  return (
    <>
      <div className="filters">
        <Filters />
      </div>
      <div className="content">
        <h1 className="content__title">Все пиццы</h1>
        {content}
      </div>
    </>
  );
}

export default Home;
