import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useFetchData from './hooks/useFetchData';

function PizzaCard({
  id, imageUrl, price, name,
  sizes, types, addToCart, editTotalDue,
}) {
  const [indexActiveType, setIndexActiveType] = useState(types[0]);
  const [indexActiveSize, setIndexActiveSize] = useState(sizes[0]);

  const { data: { cart, totalDue, allowedValuesCard } } = useFetchData();
  const { allowedTypes, allowedSizes } = allowedValuesCard;
  const type = allowedTypes[indexActiveType];
  const size = allowedSizes[indexActiveSize];

  const createLi = ([availableVals, indexActiveValue, values, handler]) => availableVals.map((value, index) => {
    const classes = cn({
      active: index === indexActiveValue,
      disabled: !values.includes(index),
    });
    return (
      <li
        key={value}
        className={classes}
        onClick={() => handler(index)}
      >
        {value}
      </li>
    );
  });

  const onSelectType = (index) => setIndexActiveType(index);
  const onSelectSize = (index) => setIndexActiveSize(index);
  const onAddToCart = () => {
    const currentId = id + type + size;
    const product = cart.filter(({ idProductInCart }) => idProductInCart === currentId)[0];
    if (product) {
      addToCart({
        ...product,
        quantity: product.quantity + 1,
      });
    } else {
      addToCart({
        id: currentId,
        name,
        size,
        type,
        imageUrl,
        price,
        quantity: 1,
      });
    }
    editTotalDue(totalDue + price);
  };

  const [renderTypes, renderSizes] = [
    [allowedTypes, indexActiveType, types, onSelectType],
    [allowedSizes, indexActiveSize, sizes, onSelectSize],
  ].map(createLi);

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
  addToCart: PropTypes.func.isRequired,
  editTotalDue: PropTypes.func.isRequired,
};

export default PizzaCard;
