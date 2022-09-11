/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function PizzaCard({
  id, imageUrl, price, name,
  sizes, types, allowedValues,
}) {
  const { types: allowedTypes, sizes: allowedSizes } = allowedValues;
  const [indexActiveType, setIndexActiveType] = useState(types[0]);
  const [indexActiveSize, setIndexActiveSize] = useState(sizes[0]);

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
        <button type="button" className="btn btn--add btn--outline btn--positive card__add">
          Добавить
          <i>10</i>
        </button>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number,
  allowedValues: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(PropTypes.number),
  }),
};

PizzaCard.defaultProps = {
  id: 0,
  imageUrl: '',
  name: '',
  price: 0,
  types: [],
  sizes: [],
  allowedValues: {},
};

export default PizzaCard;
