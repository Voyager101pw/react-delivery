import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { apiSlice } from '../../store/apiSlice';

function CartItem({ pizza }) {
  const { data: cart = [] } = apiSlice.useGetCartItemsQuery();

  const [updCartItem] = apiSlice.useUpdCartItemMutation();
  const [delCartItem] = apiSlice.useDelCartItemMutation();

  const handlerAmount = (number) => {
    const [item] = cart.filter((itemInCart) => itemInCart.id === pizza.id);
    updCartItem({ ...item, amount: item.amount + number });
  };

  const amountButton = (type) => {
    const classes = cn(
      `btn btn--outline btn--circle btn--${type}`,
      { 'btn--disabled': pizza.amount === 1 && type === 'negative' },
    );
    const handler = type === 'positive'
      ? () => handlerAmount(1)
      : () => pizza.amount > 1 && handlerAmount(-1);
    return (
      <button type="button" className={classes} onClick={handler} />
    );
  };
  return (
    <div className="item cart__item">

      <img className="item__icon" src={pizza.imageUrl} alt="Pizza test icon" />

      <div className="item__name-info">
        <h3 className="item__name">{pizza.name}</h3>
        <div className="item__info">{`${pizza.type}, ${pizza.size} см`}</div>
      </div>

      <div className="item__count">
        {amountButton('negative')}
        <b>{pizza.amount}</b>
        {amountButton('positive')}
      </div>

      <div className="item__price">
        <b>
          {`${pizza.amount * pizza.price} ₽`}
        </b>
      </div>

      <div className="item__remove">
        <button
          type="button"
          className="btn btn--remove btn--outline btn--circle btn--gray"
          onClick={() => {
            delCartItem(pizza.id);
          }}
        />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  pizza: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
