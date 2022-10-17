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
  const {
    imageUrl, price, name, sizes, types,
  } = pizza;
  
  const { allowedTypes, allowedSizes } = useSelector(selectAllowedValues);

  const idSelectedTypeRef = useRef(types[0]);
  const idSelectedSizeRef = useRef(sizes[0]);
  const nameSelectedTypeRef = useRef(allowedTypes[types[0]]);
  const valueSelectedSizeRef = useRef(allowedSizes[sizes[0]]);
  
  
  const setSelectedType = useCallback((newIdType: number): void => {
    idSelectedTypeRef.current = newIdType;
    nameSelectedTypeRef.current = allowedTypes[newIdType];
  }, []);
  
  const setSelectedSize = useCallback((newIdSize: number): void => {
    idSelectedSizeRef.current = newIdSize;
    valueSelectedSizeRef.current = allowedSizes[newIdSize];
  }, []);
  

  
  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />
      <div className="card__title">{name}</div>
      <div className="card__content">
        <ul className="card__list">
          <Types 
            idsTypes={types} 
            namesAllTypes={allowedTypes} 
            selectType={setSelectedType}
          />  
        </ul>
        <ul className="card__list">
        <Sizes
          idsSizes={sizes}
          valuesAllSize={allowedSizes}
          selectSize={setSelectedSize}
        />  
        </ul>
      </div>
      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
          <AddToCart 
          pizza={pizza}
          nameSelectedTypeRef={nameSelectedTypeRef}
          valueSelectedSizeRef={valueSelectedSizeRef}
          />
      </div>
    </div>
  );
};

export default React.memo(PizzaCard);
