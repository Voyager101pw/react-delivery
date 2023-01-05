import React, { useCallback } from 'react';
import { AddToCart } from '../Buttons';
import TypesButtons from './Types';
import Sizes from './Sizes';
import type { Pizza } from '../../redux/pizzas/types';
import type { TypeIndex } from '../../redux/types/types';
import type { SizeIndex } from '../../redux/sizes/types';

interface PropTypes {
  pizza: Pizza;
}

const PizzaCard: React.FC<PropTypes> = ({ pizza }): JSX.Element => {
  const { imageUrl, price, name, sizes, types } = pizza;
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const setPizzaType = useCallback((id: TypeIndex): void => {
    setActiveType(id);
  }, []);

  const setPizzaSize = useCallback((id: SizeIndex): void => {
    setActiveSize(id);
  }, []);

  return (
    <div className="card content__card">
      <img className="card__icon" src={imageUrl} alt={name} />
      <div className="card__title">{name}</div>
      <div className="card__content">
        <TypesButtons
          types={types}
          activeType={activeType}
          setPizzaType={setPizzaType}
        />
        <Sizes
          sizes={sizes}
          activeSize={activeSize}
          setPizzaSize={setPizzaSize}
        />
      </div>
      <div className="card__footer">
        <div className="card__price">{`от ${price} ₽`}</div>
        <AddToCart
          pizza={pizza}
          activeType={activeType}
          activeSize={activeSize}
        />
      </div>
    </div>
  );
};

export default React.memo(PizzaCard);
