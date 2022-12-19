import React, { useCallback  } from 'react';
import { AddToCart } from '../Buttons';
import Types from './Types';
import Sizes from './Sizes';
import { selectSizes } from '../../store/slices/sizes';
import { selectTypes } from '../../store/slices/types';
import type { IPizza } from '../../store/slices/pizzas';
import { useAppSelector } from '../../store/hooks';

interface PropTypes {
  pizza: IPizza;
}

const PizzaCard: React.FC<PropTypes> = ({ pizza }): JSX.Element => {
  const { imageUrl, price, name, sizes: pizzaSizes, types: pizzaTypes } = pizza;

  const allowedTypes = useAppSelector(selectTypes); // ["тонкая", "традиционная", "итальянская"]
  const allowedSizes = useAppSelector(selectSizes); // [26, 30, 40]

  const [activeType, setActiveType] = React.useState(pizzaTypes[0]); // activeType = 0 соотвествует типу "тонкая"
  const [activeSize, setActiveSize] = React.useState(pizzaSizes[0]); // activeSize = 0 соотвествует размеру 26

  const [nameActiveType, setNameActiveType] = React.useState(allowedTypes[activeType]);     // nameActiveType = "тонкая"
  const [numberActiveSize, setNumberActiveSize] = React.useState(allowedSizes[activeSize]); // numberActiveSize = 26

  const setSelectedType = useCallback(
    (id: number): void => {
      setActiveType(id);
      setNameActiveType(allowedTypes[id]);
    },
    [allowedTypes],
  );

  const setSelectedSize = useCallback(
    (id: number): void => {
      setActiveSize(id);
      setNumberActiveSize(allowedSizes[id]);
    },
    [allowedSizes],
  );

  return (
    <div className="card content__card">
        <img className="card__icon" src={imageUrl} alt={name} />
        <div className="card__title">{name}</div>
        <div className="card__content">
        <Types
          pizzaTypes={pizzaTypes}      // Доступные типы для данной пиццы
          namesAllTypes={allowedTypes} // Все типы
          activeType={activeType}      // Индекс(число) выбранного типа пиццы
          selectType={setSelectedType}
        />
        <Sizes
          pizzaSizes={pizzaSizes}      // Доступные размеры для пиццы
          valuesAllSize={allowedSizes} // Все размеры
          activeSize={activeSize}      // Индекс(число) выбранного размера пиццы
          selectSize={setSelectedSize}
        />
      </div>
      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
        <AddToCart
          pizza={pizza}
          nameActiveType={nameActiveType}
          numberActiveSize={numberActiveSize}
        />
      </div>
    </div>
  );
};

export default React.memo(PizzaCard);
