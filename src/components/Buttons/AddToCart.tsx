import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItemToCart, selectCartItemById, updateCartItem } from '../../store/slices/cart';
import type { IPizza } from '../../store/slices/pizzas';

interface PropTypes {
  pizza: IPizza;
  nameActiveType: string;
  numberActiveSize: number;
}

const AddToCart: React.FC<PropTypes> = ({ pizza, nameActiveType, numberActiveSize }): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = nameActiveType + numberActiveSize + pizza.id; // id > тонкая + 26 + 1 > "тонкая261"
  const cartItem = useAppSelector((state) => selectCartItemById(state, id));

  const addToCart = (): void => {
    if (cartItem) { // Товар отсутствует в корзине -> создаем товар в корзине с полем amount = 0
      dispatch(
        updateCartItem({
          id: cartItem.id,
          changes: { ...cartItem, amount: cartItem.amount + 1 },
        }),
      );
    } else { // Товар существует в корзине -> увеличеваем поле amount на 1
      const item = {
        id,
        imageUrl: pizza.imageUrl,
        name: pizza.name,
        type: nameActiveType,
        size: numberActiveSize,
        price: pizza.price,
        amount: 1,
      };
      dispatch(addItemToCart(item));
    }
    
  };

  return (
    <button
      type="button"
      className="btn btn--add btn--outline btn--positive card__add"
      onClick={addToCart}
    >
      Добавить
    </button>
  );
};

export default React.memo(AddToCart);
