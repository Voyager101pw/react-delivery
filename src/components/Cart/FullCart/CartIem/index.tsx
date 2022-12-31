import React from 'react';
import type { CartItem as ICartItem } from '../../../../redux/cart/types';
import { AddOne, RemoveCartItem, RemoveOne } from '../../../Buttons';

interface PropTypes {
  cartItem: ICartItem;
}

const CartItem: React.FC<PropTypes> = ({ cartItem }) => {

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
        <RemoveOne cartItem={cartItem} />
        <b>{cartItem.amount}</b>
        <AddOne cartItem={cartItem} />
      </div>

      <div className="item__price">
        <b>{`${cartItem.amount * cartItem.price} ₽`}</b>
      </div>

      <div className="item__remove">
       <RemoveCartItem id={cartItem.id} />
      </div>
    </div>
  );
};

export default CartItem;
