import React from 'react';
import { useAppSelector } from '../../../redux/store';
import { selectTypes } from '../../../redux/types/selectors';
import type { TypeIndex, TypeIndexs } from '../../../redux/types/types';

interface PropTypes {
  types: TypeIndexs;
  activeType: TypeIndex;
  setPizzaType: (id: TypeIndex) => void;
}

const TypesButtons: React.FC<PropTypes> = ({ activeType, setPizzaType, types }) => {
  const typeNames = useAppSelector(selectTypes);

  const typeButtons = types.map((type) => (
    <li
      key={type}
      className={activeType === type ? 'active' : ''}
      onClick={() => setPizzaType(type)}
    >
      {typeNames[type]}
    </li>
  ));

  return <ul className="card__list">{typeButtons}</ul>;
};

export default React.memo(TypesButtons);
