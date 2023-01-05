import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { updateCartMockAPI } from '../../../redux/cart/asyncThunks';
import type { CartItem } from '../../../redux/cart/types';

interface PropTypes {
  cartItem: CartItem;
}

const AddOne: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    const updatedCartItem = { ...cartItem, amount: cartItem.amount + 1 };
    dispatch(updateCartMockAPI(updatedCartItem));  // update cartItem in MockApi (endpoint: cart)
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
