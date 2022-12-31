import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { updateCartItem } from '../../../redux/cart/slice';
import { updateCartMockAPI } from '../../../redux/cart/asyncThunks';
import type { CartItem } from '../../../redux/cart/types';

interface PropTypes {
  cartItem: CartItem;
}

const AddOne: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(
      updateCartItem({
        id: cartItem.id,
        changes: { ...cartItem, amount: cartItem.amount + 1 },
      }),
    );
    dispatch(updateCartMockAPI({ ...cartItem, amount: cartItem.amount + 1 }));
  };

  return (
    <button
      type="button"
      className={'btn btn--outline btn--circle btn--positive'}
      onClick={handleClick}
    />
  );
};
export default AddOne;
