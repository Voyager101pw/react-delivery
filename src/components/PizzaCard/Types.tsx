import React, { useState } from 'react';

interface TypesProps {
  idsTypes: number[];
  namesAllTypes: string[];
  selectType: (id: number) => void;
}

const Types: React.FC<TypesProps> = ({ idsTypes: pizzaTypes, namesAllTypes, selectType }): JSX.Element => {
  
  const [activeType, setActiveType ] = useState(pizzaTypes[0]); // activeType contains index/id initial type

  const onClick = (idType: number): void => {
    setActiveType(idType);
    selectType(idType); // set parent state
  };

  const renderButtons = pizzaTypes.map((idType: number) => (
    <li
      key={idType}
      className={idType === activeType ? 'active' : ''}
      onClick={() => onClick(idType)}
    >
      {namesAllTypes[idType]}
    </li>
  ));

  return <>{renderButtons}</>;
};

export default Types;