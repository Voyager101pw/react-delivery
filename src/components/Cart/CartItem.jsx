import React from 'react';
import PropTypes from 'prop-types';
import { useGetCartQuery, useUpdateCartMutation } from '../../store/apiSlice';

function CartItem({ pizza }) {
  const { data: cart = [] } = useGetCartQuery();
  const [updateCart] = useUpdateCartMutation();

  const handlerAmount = (arg) => {
    const [editablePizza] = cart.filter((pizzaObj) => pizzaObj.id === pizza.id);
    updateCart({ ...editablePizza, amount: editablePizza.amount + arg });
  };

  return (
    <div className="item cart__item">

      <img className="item__icon" src={pizza.imageUrl} alt="Pizza test icon" />

      <div className="item__name-info">
        <h3 className="item__name">{pizza.name}</h3>
        <div className="item__info">{`${pizza.type}, ${pizza.size} см`}</div>
      </div>

      <div className="item__count">
        <div className="btn btn--outline btn--circle btn--negative" onClick={() => pizza.amount && handlerAmount(-1)} />
        <b>{pizza.amount}</b>
        <div className="btn btn--outline btn--circle btn--positive" onClick={() => handlerAmount(1)} />
      </div>

      <div className="item__price">
        <b>
          {`${pizza.amount * pizza.price} ₽`}
        </b>
      </div>

      <div className="item__remove">
        <div className="btn btn--remove btn--outline btn--circle btn--gray" />
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
