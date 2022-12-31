import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  addItemToCart,
  selectCartItemById,
  updateCartItem,
} from '../../redux/cart/slice';
import { addToCartMockAPI } from '../../redux/cart/asyncThunks';
import type { Pizza } from '../../redux/pizzas/types';

interface PropTypes {
  pizza: Pizza;
  nameActiveType: string;
  numberActiveSize: number;
}

const AddToCart: React.FC<PropTypes> = ({
  pizza,
  nameActiveType,
  numberActiveSize,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = nameActiveType + numberActiveSize + pizza.id; // id > тонкая + 26 + 1 > "тонкая261"
  const itemInCart = useAppSelector((state) => selectCartItemById(state, id));
  
  const handleAddToCart = (): void => {
    if (itemInCart) {
      // Товар отсутствует в корзине -> создаем товар в корзине с полем amount = 0
      dispatch(
        updateCartItem({
          id: itemInCart.id,
          changes: { ...itemInCart, amount: itemInCart.amount + 1 },
        }),
      );
      dispatch(updateCartMockAPI({ ...cartItem, amount: cartItem.amount + 1 }));
    } else {
      // Товар существует в корзине -> увеличеваем поле amount на 1
      const cartItem = {
        id,
        imageUrl: pizza.imageUrl,
        name: pizza.name,
        type: nameActiveType,
        size: numberActiveSize,
        price: pizza.price,
        amount: 1,
      };
      dispatch(addItemToCart(cartItem));
      dispatch(addToCartMockAPI(cartItem)); 
    }
  };

  return (
    <button
      type="button"
      className="btn btn--add btn--outline btn--positive card__add"
      onClick={handleAddToCart}
    >
      Добавить
    </button>
  );
};

export default React.memo(AddToCart);
