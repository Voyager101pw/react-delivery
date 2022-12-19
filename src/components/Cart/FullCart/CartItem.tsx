import React from 'react';
import cn from 'classnames';
import { ICartItem, removeCartItem, updateCartItem } from '../../../store/slices/cart';
import { useAppDispatch } from '../../../store/hooks';

interface PropTypes {
  cartItem: ICartItem;
}

const CartItem: React.FC<PropTypes> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handlerAmount = (number: number): void => {
    dispatch(
      updateCartItem({
        id: cartItem.id,
        changes: { ...cartItem, amount: cartItem.amount + number },
      }),
    );
  };

  const countButton = (type: 'negative' | 'positive'): JSX.Element => {
    const classes = cn(`btn btn--outline btn--circle btn--${type}`, {
      'btn--disabled': cartItem.amount === 1 && type === 'negative',
    });
    const handler =
      type === 'positive'
        ? () => handlerAmount(1)
        : () => cartItem.amount > 1 && handlerAmount(-1);
    return <button type="button" className={classes} onClick={handler} />;
  };

  return (
    <div className="item cart__item">
      <img
        className="item__icon"
        src={cartItem.imageUrl}
        alt="Pizza test icon"
      />

      <div className="item__name-info">
        <h3 className="item__name">{cartItem.name}</h3>
        <div className="item__info">{`${cartItem.type}, ${cartItem.size} см`}</div>
      </div>

      <div className="item__count">
        {countButton('negative')}
        <b>{cartItem.amount}</b>
        {countButton('positive')}
      </div>

      <div className="item__price">
        <b>{`${cartItem.amount * cartItem.price} ₽`}</b>
      </div>

      <div className="item__remove">
        <button
          type="button"
          className="btn btn--remove btn--outline btn--circle btn--gray"
          onClick={() => {
            dispatch(removeCartItem(cartItem.id));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
