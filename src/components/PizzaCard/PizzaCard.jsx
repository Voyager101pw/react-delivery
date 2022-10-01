import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import TypesButton from './Types';
import SizesButton from './Sizes';
import { AddToCart } from '../Buttons';

function PizzaCard(props) {
  const {
    imageUrl, price, name, sizes, types,
  } = props;
  const [indexActiveType, setIndexActiveType] = useState(types[0]);
  const [indexActiveSize, setIndexActiveSize] = useState(sizes[0]);

  const createMenuButtons = ({ menuFor, allowedValues }) => allowedValues.map((allowedValue, indexAllowedValue) => {
    const [indexActiveValue, values, handlerSelect] = menuFor === 'types'
      ? [indexActiveType, types, setIndexActiveType]
      : [indexActiveSize, sizes, setIndexActiveSize];

    const classes = cn({
      active: indexAllowedValue === indexActiveValue,
      disabled: !values.includes(indexAllowedValue),
    });

    return (
      <li
        key={allowedValue}
        className={classes}
        onClick={() => handlerSelect(indexAllowedValue)}
      >
        {allowedValue}
      </li>
    );
  });
  const priceLabel = `от ${price} ₽`;
  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />
      <div className="card__title">{name}</div>
      <div className="card__content">
        <ul className="card__list">
          <TypesButton
            createMenuButtons={createMenuButtons}
          />
        </ul>
        <ul className="card__list">
          <SizesButton
            createMenuButtons={createMenuButtons}
          />
        </ul>
      </div>
      <div className="card__footer">
        <div className="card__price">{priceLabel}</div>
        <AddToCart pizzaProps={props} indexActiveType={indexActiveType} indexActiveSize={indexActiveSize} />
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
};

export default PizzaCard;
