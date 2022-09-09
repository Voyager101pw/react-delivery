import React from 'react';

function PizzaCard({
  id, imageUrl, price, name, sizes, types,
}) {
  console.log(imageUrl)
  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />

      <div className="card__title">{name}</div>

      <div className="card__content">
        <ul className="card__content-list">
          <li className="card__content-active">тонкая</li>
          <li>традиционная</li>
          <li className="card__content-disable">ахуенная</li>
        </ul>
        <ul className="card__content-list">
          <li>26</li>
          <li className="card__content-active">30</li>
          <li className="card__content-disable">40</li>
        </ul>
      </div>

      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
        <button type="button" className="btn btn--add btn--outline btn--positive card__add">
          Добавить
          <i>10</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
