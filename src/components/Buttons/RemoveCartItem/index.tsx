import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { removeCartItem } from '../../../redux/cart/slice';
import { removeItemMockAPI } from '../../../redux/cart/asyncThunks';

interface PropTypes {
  id: string;
}

const RemoveCartItem: React.FC<PropTypes> = ({ id }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(removeCartItem(id));
    dispatch(removeItemMockAPI(id));
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
