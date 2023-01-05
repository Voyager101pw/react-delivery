import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { updateCartMockAPI } from '../../../redux/cart/asyncThunks';
import type { CartItem } from '../../../redux/cart/types';
import cn from 'classnames';

interface PropTypes {
  cartItem: CartItem;
}

const RemoveOne: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    if (cartItem.amount === 1) return;

    const updatedCartItem = { ...cartItem, amount: cartItem.amount - 1 };
    dispatch(updateCartMockAPI(updatedCartItem));
  };

  const classes = cn('btn btn--outline btn--circle btn--negative', {
    'btn--disabled': cartItem.amount === 1,
  });

  return <button type="button" className={classes} onClick={handleClick} />;
};
export default RemoveOne;
