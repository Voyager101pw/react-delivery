import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import {
  addToCartMockAPI,
  updateCartMockAPI,
} from '../../../redux/cart/asyncThunks';
import { selectCartItemById } from '../../../redux/cart/selectors';
import type { Pizza } from '../../../redux/pizzas/types';
import { selectNameActiveType } from '../../../redux/types/selectors';
import { selectNumberActiveSize } from '../../../redux/sizes/selectors';

interface PropTypes {
  pizza: Pizza;
  activeType: number;
  activeSize: number;
}

const AddToCart: React.FC<PropTypes> = ({ pizza, activeType, activeSize }) => {
  const dispatch = useAppDispatch();

  const nameActiveType = useAppSelector((state) =>
    selectNameActiveType(state, activeType),
  );

  const numberActiveSize = useAppSelector((state) =>
    selectNumberActiveSize(state, activeSize),
  );

  const extendedId = nameActiveType + numberActiveSize + pizza.id; //  тонкая + 26 + 1 > "тонкая261"
  const itemInCart = useAppSelector((state) =>
    selectCartItemById(state, extendedId),
  );

  const handleAddToCart = (): void => {
    itemInCart
      ? dispatch(
          updateCartMockAPI({ ...itemInCart, amount: itemInCart.amount + 1 }),
        )
      : dispatch(
          addToCartMockAPI({
            // id: назначается на бэкэнде
            extendedId,
            imageUrl: pizza.imageUrl,
            name: pizza.name,
            type: nameActiveType,
            size: numberActiveSize,
            price: pizza.price,
            amount: 1,
          }),
        );
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
