/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelectAllowedValues } from '../../hooks/useSelect';
import { apiSlice } from '../../store/apiSlice';

function AddToCart({ pizzaProps, indexActiveType, indexActiveSize }) {
  const {
    id, imageUrl, price, name, sizes, types,
  } = pizzaProps;
  const [allowedTypes, allowedSizes] = useSelectAllowedValues('types', 'sizes');
  const [addToCart] = apiSlice.useAddToCartMutation();
  const { data: cart } = apiSlice.useGetCartQuery();
  const { cartItems, totalDue, amountPizzas } = cart;

  const nameSelectedType = allowedTypes[indexActiveType];
  const nameSelectedSize = allowedSizes[indexActiveSize];
  const extendedId = nameSelectedType + nameSelectedSize + id;
  const idSearchedPizza = extendedId;

  const pizzaIsExistInCart = () => {
    const pizza = cartItems.filter(({ id: idPizzaInCart }) => idPizzaInCart === idSearchedPizza)[0];
    return Boolean(pizza);
  };

  const handlerAddToCart = () => {
    let updatedCartItems = null;

    if (pizzaIsExistInCart()) {
      updatedCartItems = cartItems.map((cartItem) => (cartItem.id === idSearchedPizza
        ? ({ ...cartItem, amount: cartItem.amount + 1 })
        : cartItem
      ));
    } else {
      updatedCartItems = [
        ...cartItems,
        {
          id: extendedId,
          name,
          type: nameSelectedType,
          size: nameSelectedSize,
          imageUrl,
          price,
          amount: 1,
        },
      ];
    }

    addToCart({
      cartItems: updatedCartItems,
      totalDue: totalDue + price,
      amountPizzas: amountPizzas + 1,
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
