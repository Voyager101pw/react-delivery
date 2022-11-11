import React, { useCallback, useRef } from 'react';
import { AddToCart } from '../Buttons';
import { Pizza } from '../../store/types';
import Types from './Types';
import Sizes from './Sizes';
import { useSelector } from 'react-redux';
import { selectAllowedValues } from '../../store/allowedValuesSlice';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }): JSX.Element => {
  const { imageUrl, price, name, sizes, types } = pizza;

  const { allowedTypes, allowedSizes } = useSelector(selectAllowedValues);

  const [activeType, setActiveType] = React.useState(types[0]); // id type: number
  const [activeSize, setActiveSize] = React.useState(sizes[0]); // id size: number

  const [nameType, setNameType] = React.useState(allowedTypes[types[0]]); // name needed for logic add to cart feature
  const [valueSize, setValueSice] = React.useState(allowedSizes[sizes[0]]); // value needed for logic add to cart feature

  const setSelectedType = useCallback(
    (newIdType: number): void => {
      setActiveType(newIdType);
      setNameType(allowedTypes[newIdType]);
    },
    [allowedTypes],
  );

  const setSelectedSize = useCallback(
    (newIdSize: number): void => {
      setActiveSize(newIdSize);
      setValueSice(allowedSizes[newIdSize]);
    },
    [allowedSizes],
  );

  return (
    <div className="card content__card">
        <img className="card__icon" src={imageUrl} alt={name} />
        <div className="card__title">{name}</div>
        <div className="card__content">
        <Types
          pizzaTypes={types}
          namesAllTypes={allowedTypes}
          activeType={activeType}
          selectType={setSelectedType}
        />
        <Sizes
          pizzaSizes={sizes}
          valuesAllSize={allowedSizes}
          selectSize={setSelectedSize}
          activeSize={activeSize}
        />
      </div>
      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
        <AddToCart
          pizza={pizza}
          nameSelectedTypeRef={nameType}
          valueSelectedSizeRef={valueSize}
        />
      </div>
    </div>
  );
};

export default React.memo(PizzaCard);
