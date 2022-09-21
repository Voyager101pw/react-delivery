/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelectAllowedValues } from '../../hooks/useSelect';
import { apiSlice } from '../../store/apiSlice';

function AddToCart({ pizzaProps, indexActiveType, indexActiveSize }) {
  const {
    id, imageUrl, price, name, sizes, types,
  } = pizzaProps;
  const [allowedTypes, allowedSizes] = useSelectAllowedValues('types', 'sizes');
  const { data: cart = {} } = apiSlice.useGetCartQuery();
  const { cartItems, totalDue, amountPizzas } = cart;


  const nameSelectedType = allowedTypes[indexActiveType];
  const nameSelectedSize = allowedSizes[indexActiveSize];
  const extendedId = nameSelectedType + nameSelectedSize + id;

  const [addToCart] = apiSlice.useAddToCartMutation();
  const [updateCartInfo] = apiSlice.useUpdateCartInfoMutation();
  const [incrementAmount] = apiSlice.useIncrementAmountMutation();

  const pizzaIsExistInCart = () => {
    const idSearchedPizza = extendedId;
    const pizza = cartItems.filter(({ id: idPizzaInCart }) => idPizzaInCart === idSearchedPizza)[0];
    return {
      isExist: Boolean(pizza),
      pizza,
    };
  };
  const handlerAddToCart = () => {
    const { isExist, pizza } = pizzaIsExistInCart();
    isExist
      ? incrementAmount({ ...pizza, amount: pizza.amount + 1 })
      : addToCart({
        id: extendedId,
        name,
        type: nameSelectedType,
        size: nameSelectedSize,
        imageUrl,
        price,
        amount: 1,
      });
    updateCartInfo({
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
