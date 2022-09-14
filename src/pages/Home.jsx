/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PizzaCard, Filters } from '../components';
import useFetchData from '../components/hooks/useFetchData';
import { useAddToCartMutation, useEditTotalDueMutation } from '../store/apiSlice';
import Spinner from '../components/Spinner';

function Home() {
  const { data: { pizzas = [] }, isLoading } = useFetchData();
  const [addToCart] = useAddToCartMutation();
  const [editTotalDue] = useEditTotalDueMutation();

  const renderCards = () => pizzas.map((props) => <PizzaCard {...props} key={props.id} addToCart={addToCart} editTotalDue={editTotalDue} />);

  const content = isLoading
    ? <Spinner />
    : <div className="content__cards">{ renderCards() }</div>;

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
