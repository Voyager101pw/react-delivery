import React, { useState } from 'react';
import useAllowedValues from '../../hooks/useAllowedValues';
import { apiSlice } from '../../store/apiSlice';
import { Pizza } from '../../store/types';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { imageUrl, price, name, sizes, types, id } = pizza;

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const { data: cart = [] } = apiSlice.useGetCartItemsQuery();
  const [updateCart] = apiSlice.useUpdCartItemMutation();
  const [addToCart] = apiSlice.useAddCartItemMutation();

  const { allowedTypes, allowedSizes } = useAllowedValues();
  const nameSelectedType = allowedTypes[activeType];
  const valueSelectedSize = allowedSizes[activeSize];
  const idPizza = nameSelectedType + valueSelectedSize + id;

  const typesPizza = types.map((typeId) => (
    <li
      key={typeId}
      className={activeType === typeId ? 'active' : ''}
      onClick={() => setActiveType(typeId)}
    >
      {allowedTypes[typeId]}
    </li>
  ));

  const sizesPizza = sizes.map((sizeId) => (
    <li
      key={sizeId}
      className={activeSize === sizeId ? 'active' : ''}
      onClick={() => setActiveSize(sizeId)}
    >
      {allowedSizes[sizeId]}
    </li>
  ));

  const handlerAddToCart = () => {
    const [item] = cart.filter((cartItem) => cartItem.id === idPizza);
    item
      ? updateCart({ ...item, amount: item.amount + 1 })
      : addToCart({
          id: idPizza,
          name,
          type: nameSelectedType,
          size: valueSelectedSize,
          imageUrl,
          price,
          amount: 1,
        });
  };

  return (
    <div className='card content__card'>
      <img className='card__icon' src={imageUrl} alt={name} />
      <div className='card__title'>{name}</div>
      <div className='card__content'>
        <ul className='card__list'>{typesPizza}</ul>
        <ul className='card__list'>{sizesPizza}</ul>
      </div>
      <div className='card__footer'>
        <div className='card__price'>{`от ${price} ₽`}</div>
        <button
          type='button'
          className='btn btn--add btn--outline btn--positive card__add'
          onClick={handlerAddToCart}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
