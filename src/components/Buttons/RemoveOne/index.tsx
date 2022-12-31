import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import { updateCartItem } from '../../../redux/cart/slice';
import { updateCartMockAPI } from '../../../redux/cart/asyncThunks';
import type { CartItem } from '../../../redux/cart/types';
import cn from 'classnames';

interface PropTypes {
  cartItem: CartItem;
}

const AddOne: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    if (cartItem.amount === 1) return;

    dispatch(
      updateCartItem({
        id: cartItem.id,
        changes: { ...cartItem, amount: cartItem.amount - 1 },
      }),
    );
    dispatch(updateCartMockAPI({ ...cartItem, amount: cartItem.amount - 1 }));
  };

  const classes = cn('btn btn--outline btn--circle btn--negative', {
    // Если количество пиццы равно 1, то сделать кнопку "-" серой
    'btn--disabled': cartItem.amount === 1,
  });

  return <button type="button" className={classes} onClick={handleClick} />;
};
export default AddOne;
