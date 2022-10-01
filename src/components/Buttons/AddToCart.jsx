/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelectAllowedValues } from '../../hooks/useSelect';
import { apiSlice } from '../../store/apiSlice';

function AddToCart({ pizzaProps, indexActiveType, indexActiveSize }) {
  const {
    id, imageUrl, price, name,
  } = pizzaProps;
  const [allowedTypes, allowedSizes] = useSelectAllowedValues('types', 'sizes');
  const [updateCart] = apiSlice.useUpdCartItemMutation();
  const [addToCart] = apiSlice.useAddCartItemMutation();
  const { data: cart = [] } = apiSlice.useGetCartItemsQuery();

  const nameSelectedType = allowedTypes[indexActiveType];
  const nameSelectedSize = allowedSizes[indexActiveSize];
  const extendedId = nameSelectedType + nameSelectedSize + id;
  const idSearchedPizza = extendedId;

  const handlerAddToCart = () => {
    const [item] = cart.filter((cartItem) => (cartItem.id === idSearchedPizza));
    item
      ? updateCart({ ...item, amount: item.amount + 1 })
      : addToCart({
        id: extendedId,
        name,
        type: nameSelectedType,
        size: nameSelectedSize,
        imageUrl,
        price,
        amount: 1,
      });
  };

  return (
    <button
      type="button"
      className="btn btn--add btn--outline btn--positive card__add"
      onClick={handlerAddToCart}
    >
      Добавить
    </button>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  pizzaProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  indexActiveType: PropTypes.number.isRequired,
  indexActiveSize: PropTypes.number.isRequired,
};
