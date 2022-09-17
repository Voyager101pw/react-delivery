import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useGetAllowedValuesQuery, useGetCartQuery, useAddToCartMutation, useIncrementAmountMutation } from '../store/apiSlice';

function PizzaCard({
  id, imageUrl, price, name, sizes, types,
}) {
  const [indexActiveType, setIndexActiveType] = useState(types[0]);
  const [indexActiveSize, setIndexActiveSize] = useState(sizes[0]);

  const { data: allowedTypes = [] } = useGetAllowedValuesQuery('types');
  const { data: allowedSizes = [] } = useGetAllowedValuesQuery('sizes');
  const { data: cart = [] } = useGetCartQuery();

  const nameSelectedType = allowedTypes[indexActiveType];
  const nameSelectedSize = allowedSizes[indexActiveSize];

  const onSelectType = (indx) => setIndexActiveType(indx);
  const onSelectSize = (indx) => setIndexActiveSize(indx);
  const [addToCart] = useAddToCartMutation();
  const [incrementAmount] = useIncrementAmountMutation();

  const onAddToCart = () => {
    const idPizza = nameSelectedType + nameSelectedSize + id;
    const pizza = cart.filter(({ id: idPizzaInCart }) => idPizzaInCart === idPizza)[0];
    const pizzaExistInCart = Boolean(pizza);
    if (pizzaExistInCart) {
      incrementAmount({
        ...pizza,
        quantity: pizza.quantity + 1,
      });
    } else {
      addToCart({
        id: idPizza,
        name,
        size: nameSelectedSize,
        type: nameSelectedType,
        imageUrl,
        price,
        quantity: 1,
      });
    }
    // editTotalDue(totalDue + price);
  };

  const createContent = ([
    allowedValues,
    indexActiveValue,
    values,
    handler,
  ]) => allowedValues.map((allowedValue, index) => {
    const classes = cn({
      active: index === indexActiveValue,
      disabled: !values.includes(index),
    });
    return (
      <li
        key={allowedValue}
        className={classes}
        onClick={() => handler(index)}
      >
        {allowedValue}
      </li>
    );
  });

  const [contentTypes, contentSizes] = [
    [allowedTypes, indexActiveType, types, onSelectType],
    [allowedSizes, indexActiveSize, sizes, onSelectSize],
  ].map(createContent);

  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />
      <div className="card__title">{name}</div>
      <div className="card__content">
        <ul className="card__list">{contentTypes}</ul>
        <ul className="card__list">{contentSizes}</ul>
      </div>
      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
        <button
          type="button"
          className="btn btn--add btn--outline btn--positive card__add"
          onClick={onAddToCart}
        >
          Добавить
          <i>10</i>
        </button>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
};

export default PizzaCard;
