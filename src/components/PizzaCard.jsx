import React from 'react';

import pizza from '../assets/img/pizzaCardTEST.png'; // << TEST >>

function PizzaCard() {
  return (
    <div className="card">
      <img src={pizza} alt="pizza image" />

      <div className="card__title">Пепперони Фреш с перцем</div>

      <div className="card__content">
        <ul>
          <li className="active">тонкая</li>
          <li>традиционная</li>
          <li className="disable">ахуенная</li>
        </ul>
        <ul>
          <li>26</li>
          <li className='active'>30</li>
          <li className="disable">40</li>
        </ul>
      </div>

      <div className="card__footer">
        <span>от 803 ₽</span>
        <button className="button button--add button--outline">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
          </svg>
          Добавить
          <i>10</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
