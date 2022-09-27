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
  const [addToCart] = apiSlice.useAddToCartMutation();
  const { data: cart = [] } = apiSlice.useGetCartQuery();

  const nameSelectedType = allowedTypes[indexActiveType];
  const nameSelectedSize = allowedSizes[indexActiveSize];
  const extendedId = nameSelectedType + nameSelectedSize + id;
  const idSearchedPizza = extendedId;

  const pizzaIsExistInCart = () => {
    const pizza = cart.filter(({ id: idPizzaInCart }) => idPizzaInCart === idSearchedPizza)[0];
    return Boolean(pizza);
  };

  const handlerAddToCart = () => {
    let updatedCartItems = null;

    if (pizzaIsExistInCart()) {
      updatedCartItems = cart.map((cartItem) => (cartItem.id === idSearchedPizza
        ? ({ ...cartItem, amount: cartItem.amount + 1 })
        : cartItem
      ));
    } else {
      updatedCartItems = {
        id: extendedId,
        name,
        type: nameSelectedType,
        size: nameSelectedSize,
        imageUrl,
        price,
        amount: 1,
      };
    }
    addToCart(updatedCartItems);
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
