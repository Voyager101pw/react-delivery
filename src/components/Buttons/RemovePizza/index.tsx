import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { removeItemMockAPI } from '../../../redux/cart/asyncThunks';
import { CartItem } from '../../../redux/cart/types';

interface PropTypes {
  cartItem: CartItem;
}

const RemoveCartItem: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(removeItemMockAPI(cartItem.id));
  };

  return (
    <button
      type="button"
      className="btn btn--remove btn--outline btn--circle btn--gray"
      onClick={handleClick}
    />
  );
};

export default RemoveCartItem;
