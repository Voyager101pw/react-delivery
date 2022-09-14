/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function PizzaCard({
  id, imageUrl, price, name,
  sizes, types, allowedValues,
  addToCart, cartState,
}) {
  const [indexActiveType, setIndexActiveType] = useState(types[0]);
  const [indexActiveSize, setIndexActiveSize] = useState(sizes[0]);

  const { types: allowedTypes, sizes: allowedSizes } = allowedValues;
  const { pizzas, totalDue } = cartState;

  // eslint-disable-next-line max-len
  const createItems = ([availableVals, indexActiveValue, values, handler]) => availableVals.map((availableVal, index) => {
    const classes = cn({
      active: index === indexActiveValue,
      disabled: !values.includes(index),
    });
    return (
      <li
        key={availableVal}
        className={classes}
        onClick={() => handler(index)}
      >
        {availableVal}
      </li>
    );
  });

  const onSelectType = (index) => setIndexActiveType(index);
  const onSelectSize = (index) => setIndexActiveSize(index);
  const onAddToCart = () => {
    const type = allowedTypes[indexActiveType];
    const size = allowedSizes[indexActiveSize];
    const pizzaIsExistInCart = pizzas.ids.includes(id + type + size);
    if (pizzaIsExistInCart) {
      addToCart({
        pizzas: {
          ...pizzas,
          entities: {
            ...pizzas.entities,
            [id + type + size]: {
              ...pizzas.entities[id + type + size],
              quantity: pizzas.entities[id + type + size].quantity + 1,
            },
          },
        },
        totalDue: totalDue + price,
      });
    } else {
      addToCart({
        pizzas: {
          ...pizzas,
          entities: {
            ...pizzas.entities,
            [id + type + size]: {
              id: id + type + size,
              name,
              type,
              size,
              imageUrl,
              quantity: 1,
              price,
            },
          },
          ids: [...pizzas.ids, id + type + size],
        },
        totalDue: totalDue + price,
      });
    }
  };

  const [renderTypes, renderSizes] = [
    [allowedTypes, indexActiveType, types, onSelectType],
    [allowedSizes, indexActiveSize, sizes, onSelectSize],
  ].map(createItems);

  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />
      <div className="card__title">{name}</div>
      <div className="card__content">
        <ul className="card__list">{renderTypes}</ul>
        <ul className="card__list">{renderSizes}</ul>
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
  allowedValues: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  cartState: PropTypes.shape({
    pizzas: PropTypes.shape({
      entities: PropTypes.object,
      ids: PropTypes.arrayOf(PropTypes.string),
    }),
    totalDue: PropTypes.number,
  }).isRequired,
};

export default PizzaCard;
