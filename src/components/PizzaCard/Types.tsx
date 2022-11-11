import React from 'react';

interface TypesProps {
  pizzaTypes: number[];
  namesAllTypes: string[];
  activeType: number;
  selectType: (id: number) => void;
}

const Types: React.FC<TypesProps> = (props): JSX.Element => {
  const { pizzaTypes, namesAllTypes, activeType, selectType } = props;

  const renderButtons = pizzaTypes.map((idType: number) => (
    <li
      key={idType}
      className={idType === activeType ? 'active' : ''}
      onClick={() => selectType(idType)}
    >
      {namesAllTypes[idType]}
    </li>
  ));

  return <ul className="card__list">{renderButtons}</ul>;
};

export default React.memo(Types);
